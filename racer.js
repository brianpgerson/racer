var p1 = 0;
var p2 = 0;
var finish = 2;

document.addEventListener('keypress', updatePlayerPosition);

// body.addEventListener("load", setUpTrack(finish));


function setUpTrack(finish) {
	var track1 = document.getElementById("player1");
	var track2 = document.getElementById("player2");
	track1.innerHTML = createRows(finish);
	track2.innerHTML = createRows(finish);
}

function createRows(howMany){
	var indyPiece = "<li><div class='piece'></div></li>"
	var trackHTML = "";
	for (i=0;i<=howMany-1;i++){
		trackHTML+=indyPiece;
	}
	return trackHTML;
}

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
		var finalPositions = document.querySelectorAll(".active");
		finalPositions[0].setAttribute("class", "piece");
		finalPositions[1].setAttribute("class", "piece");

	}
}


function updateRaceTrack(position, column){
	var racetrack = document.querySelectorAll(column);
	for (i = 0; i < racetrack.length; i++) {racetrack[i].setAttribute("class", "piece");}
	racetrack[position - 1].setAttribute("class", "piece active");
}	


