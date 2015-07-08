document.addEventListener('keypress', getCharCode);

var p1 = 0;
var p2 = 0;

function getCharCode(event){
	if (event.charCode == 112){
		p1++;
		console.log(p1);
	}
}