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



//reject



//every



//some


//pluck



//sortby



//groupby