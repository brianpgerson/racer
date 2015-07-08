document.addEventListener('keypress', updatePlayerPosition);

var p1 = 0;
var p2 = 0;
var finish = 5;

function updatePlayerPosition(event){
	if (event.charCode == 112){
		p1++;
		checkForFinish(p1, "Papa John");
		console.log(p1);
	} else if (event.charCode == 113){
		p2++;
		checkForFinish(p2, "Quiznos");
		console.log(p2);
	}

}

function checkForFinish(position, player){
	if (finish - position == 0){
		alert(player + " won!");
	}
}