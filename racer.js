document.addEventListener('keypress', updatePlayerPosition);

var playerPositions = createInitPositions(playerNum);
p1 = 0;
p2 = 0;
var trackLength = 5;
var playerNum = 2;
var w = playerNum*124;

function setUpTrack(playerNum, trackLength) {
	var block = createRows(trackLength);
	var playerColumns = document.getElementsByClassName("players");
	var course = document.getElementById("track");

	for (i=0;i<playerNum;i++){
		var playerColumns = "<ul class = 'players' id = 'player"+i+"'>" + block + "</ul>";
		course.innerHTML += playerColumns;
	}
	document.getElementById('track').setAttribute("style","width:" + w + "px;");
}

function createRows(howMany){
	var indyPiece = "<li><div class='piece'></div></li>"
	var trackHTML = "";
	for (i=0;i<=howMany-1;i++){
		trackHTML+=indyPiece;
	}
	return trackHTML;
}

function createInitPositions(playerNum){
	var positions = [];
	for (i=0;i<playerNum;i++){
		positions.push(0);
	}
	return positions;
}

function updatePlayerPosition(event, playerNum){
	if (event.charCode == 112){
		p1++;
		updateRaceTrack(p1, "#player1 > li > div");
		checkForFinish(p1, "Papa John", reset);
	} else if (event.charCode == 113){
		p2++;
		updateRaceTrack(p2, "#player2 > li > div");
		checkForFinish(p2, "Quiznos", reset);
	}
}

function updateRaceTrack(position, column){
	var racetrack = document.querySelectorAll(column);
	for (i = 0; i < racetrack.length; i++) {racetrack[i].setAttribute("class", "piece");}
	racetrack[position - 1].setAttribute("class", "piece active");
}	

function checkForFinish(position, player, callback){
	if (trackLength - position == 0){
		var finalPositions = document.querySelectorAll(".active");
		alert(player + " won!");
		callback(finalPositions);
	}
}

function reset(nodeList){
	for (i=0;i<nodeList.length;i++) {
		nodeList[i].setAttribute("class", "piece");
	}
	p1=0;
	p2=0;
}



