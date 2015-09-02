//each
function each(callback, list){
	if (Array.isArray(list)) {
		for (i=0; i<list.length; i++){
			callback(list[i]);
		}
	} else {
		for (var key in list){
			if (list.hasOwnProperty(key)){
				callback(list[key])
			}
		}
	}
}


//map
function map(callback, list){
	var results = []
	if (Array.isArray(list)){
		for (i=0; i<list.length; i++){
			results.push(callback(list[i]));
		}
	} else {
		for (var key in list){
			if (list.hasOwnProperty(key)){
				results.push(callback(list[key]));
			}
		}
	}
	return results;
}


//filter
function filter(callback, list){
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



//find



//reject



//every



//some

<ul id="test"><li>cool</li><li>cool</li><li>cool</li></ul>

//pluck



//sortby



//groupby