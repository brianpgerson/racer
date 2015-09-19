//each
function each(callback, list, context){
	var callback = context ? callback.bind(context) : callback;
	if (Array.isArray(list)) {
		for (i=0; i<list.length; i++){
			callback(list[i]);
		}
	} else {
		for (var key in list){
			if (list.hasOwnProperty(key)){
				callback(list[key]);
			}
		}
	}
}


//map
function map(callback, list, context){
	var callback = context ? callback.bind(context) : callback;
	var mappedArray = []
	if (Array.isArray(list)){
		for (i=0; i<list.length; i++){
			mappedArray.push(callback(list[i]));
		}
	} else {
		for (var key in list){
			if (list.hasOwnProperty(key)){
				mappedArray.push(callback(list[key]));
			}
		}
	}
	return mappedArray;
}


//filter
function filter(callback, list, context){
	var callback = context ? callback.bind(context) : callback;
	var filteredList = []
	if (Array.isArray(list)){
		for (i=0; i<list.length; i++){
			if (callback(list[i])) {
				filteredList.push(list[i]);
			}
		}
	} else {
		for (var key in list){
			if (list.hasOwnProperty(key)){
				if (callback(list[key])) {
					filteredList.push(list[key]);
				}
			}
		}
	}
	return filteredList;
}



//reduce
function reduce(callback, list, memo, context){
	var callback = context ? callback.bind(context) : callback;
	if (Array.isArray(list)){
		var total = memo ? memo : 0;
		for (i=0; i<list.length; i++){
			console.log(total); 
			var total = callback(total, list[i]);
		}
	} else {
		var total = memo ? memo : 0;
		for (var key in list){
			if (list.hasOwnProperty(key)){
				var total = callback(total, list[key]);
			}
		}
	}
	return total;
}


//find
function find(callback, list, context){
	var callback = context ? callback.bind(context) : callback;
	if (Array.isArray(list)){
		for (i=0; i<list.length; i++){
			if (callback(list[i])) {
				return list[i];
			}
		}
	} else {
		for (var key in list){
			if (callback(list[key])){
				return list[key];
			}
		}
	}
}



//reject
function reject(callback, list, context){
	var callback = context ? callback.bind(context) : callback;
	var rejects = [];
	if (Array.isArray(list)){
		for (i=0; i<list.length; i++){
			if (!callback(list[i])){
				rejects.push(list[i]);
			}
		}
	} else {
		for (var key in list){
			if (!callback(list[key])){
				rejects.push(list[key]);
			}
		}
	}
	return rejects;
}

//every
function every(callback, list, context){
	var callback = context ? callback.bind(context) : callback;
	if (Array.isArray(list)){
		for (i=0; i<list.length; i++){
			if (!callback(list[i])){
				return false;
			}
		}
	} else {
		for (var key in list){
			if (!callback(list[i])){
				return false
			}
		}
	} 
	return true;
}


//some
function some(callback, list, context){
	var callback = context ? callback.bind(context) : callback;
	if (Array.isArray(list)){
		for (i=0; i<list.length; i++){
			if (callback(list[i])){
				return true;
			}
		}
	} else {
		for (var key in list){
			if (callback(list[i])){
				return true;
			}
		}
	} 
	return false;
}


//pluck
function pluck(list, prop){
	var results = [];
	if (Array.isArray(list)){
		for (i=0; i<list.length; i++){
			for (var key in list[i]){
				if (key == prop){
					results.push(list[i][prop])
				}			
			}
		}
	}
	return results;
}


//sortby
function sortBy(callback, list, context){
	var callback = context ? callback.bind(context) : callback;
	function comparisonValue(a, b) {
		return callback(a) - callback(b);
	}	
	function comparisonString(a, b){
		if (a[callback] > b[callback]){
			return 1;
		}
		if (a[callback] < b[callback]){
			return -1;
		}else {
			return 0;
		}
	}
	if (Array.isArray(list)){	
		typeof(callback) == "string" ? newList = list.sort(comparisonString) : newList = list.sort(comparisonValue);
	}  
	return newList;
}