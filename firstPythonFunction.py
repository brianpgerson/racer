function reverse(str){
	if (str == ""){
		return "";
	} else {
		var firstSymbol = str[0];
		return reverse(str.slice(1)) + firstSymbol;
	}
}

function bestSubset(weightLimit, items){
	if (weightLimit == 0 || items.length == 0){
		return 0;
	} else if (items[0] > weightLimit){
		return bestSubset(weightLimit, items.slice(1));
	} else {
		loseIt = bestSubset(weightLimit, items.slice(1));
		useIt = items[0] + bestSubset(weightLimit - items[0], items.slice(1));
		return Math.max(loseIt, useIt);
	}
}

function editCost(firstStr, secondStr){
	if (firstStr.length == 0){
		return secondStr.length;
	} else if (secondStr.length == 0){
		return firstStr.length;
	} else if (firstStr[0] == secondStr[0]){
		return editCost(firstStr.slice(1), secondStr.slice(1));
	} else {
		var substitution = 1 + editCost(firstStr.slice(1), secondStr.slice(1));
		var deletion = 1 + editCost(firstStr.slice(1), secondStr);
		var insertion = 1 + editCost(firstStr, secondStr.slice(1));
		return Math.min(substitution, deletion, insertion);
	}
}