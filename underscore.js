//each
function each(callback, list, context){
	if (context) {
		callback = callback.bind(context)
	}
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
	if (context) {
		callback = callback.bind(context)
	}
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
	if (context) {
		callback = callback.bind(context)
	}
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


//pluck



//sortby



//groupby