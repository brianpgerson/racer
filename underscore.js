//each
function each(callback, list, context){
	if (Array.isArray(list)) {
		for (i=0; i<list.length; i++){
			callback(list[i]);
		}
	} else {
		for (var key in list){
			if (list.hasOwnProperty(key)){
				if (context != undefined){
					callback.call(context, key);
				} else {
					callback(list[key]);
				}
			}
		}
	}
}


//map
function map(callback, list){
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
function reduce(callback, list){

	if (Array.isArray(list)) {

	} else {

	}
}


//find



//reject



//every



//some


//pluck



//sortby



//groupby