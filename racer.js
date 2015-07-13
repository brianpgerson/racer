document.addEventListener('keypress', updatePlayerPosition);

var p1 = 0;
var p2 = 0;
var finish = 5;


function updatePlayerPosition(event){
	if (event.charCode == 112){
		p1++;
		updateRaceTrack(p1, "#player1 > li > div");
		checkForFinish(p1, "Papa John");
	} else if (event.charCode == 113){
		p2++;
		updateRaceTrack(p2, "#player2 > li > div");
		checkForFinish(p2, "Quiznos");
	}

}

function checkForFinish(position, player){
	if (finish - position == 0){
		alert(player + " won!");
		p1 = 0;
		p2 = 0;
	}
}


function updateRaceTrack(position, column){
	var racetrack = document.querySelectorAll(column);
	for (i = 0; i < racetrack.length; i++) {racetrack[i].setAttribute("class", "piece");}
	racetrack[position - 1].setAttribute("class", "piece active");
}	


