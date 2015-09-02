//each
function each(list, callback){
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
function map(list, callback){
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



//reduce



//find



//reject



//every



//some

<ul id="test"><li>cool</li><li>cool</li><li>cool</li></ul>

//pluc



//sortby



//groupby