window.addEventListener('load', bindEventListeners);


// ==============================
// VIEW CODE
// ==============================



function handleInitializeClick(){
	var players = playerCreate(getCharacters());
	hide(document.getElementById("input"));
	setUpTrack(players.length);
	document.addEventListener('keypress', updatePlayerPosition);
}

function bindEventListeners() {
	document.getElementById("playersDropDown").addEventListener("change", createInputFields, false);
	document.getElementById("init").addEventListener("click", handleInitializeClick, false);
}

function getCharacters(){
	var nodeList = document.querySelectorAll('.player');
	var characters = [];
	for (i=0; i<nodeList.length; i++){
		characters.push(nodeList[i].value);
	}
	return characters;
}

//----------------
// handle input section
//----------------


function resetInputField(nodeList){
	while (nodeList.hasChildNodes()) {
		nodeList.removeChild(nodeList.firstChild);
	}
}

function createInputFields(event, value){
	show(document.getElementById("init"));
	resetInputField(document.getElementById("playerKeys"));
	document.getElementById("playerKeys").innerHTML = "<p>Please select a letter to press for your racer to move forward:</p>"

	for (i=0; i < event.target.selectedIndex; i++){
		var fieldHTML = "<br /><label for='player"+i+"'>Key for Player "+(i+1)+": </label><input type='text' class='player'><br />";
		document.getElementById("playerKeys").innerHTML += fieldHTML;
	}
}

function hide(section){
	section.setAttribute("class", "hidden");
}

function show(section){
	section.setAttribute("class", "shown");
}

//----------------
// create track section
//----------------

function setUpTrack(playerNum) {
	var trackLength = 5;
	var block = createColumn(trackLength);
	for (i=0;i<playerNum;i++){
		var playerColumns = "<ul class = 'players' id = 'player"+i+"'>" + block + "</ul>";
		document.getElementById("track").innerHTML += playerColumns;
	}
	document.getElementById('track').setAttribute("style","width:" + (playerNum*124) + "px;");
}

function createColumn(playerNum){
	var indyPiece = "<li><div class='piece'></div></li>"
	var trackHTML = "";
	for (i=0;i<=playerNum-1;i++){
		trackHTML+=indyPiece;
	}
	return trackHTML;
}



// ==============================
// MODEL CODE
// ==============================

var players;

function Player(id, charCode){
	this.id = id;
	this.position = 0;
	this.charCode = charCode;	
}

// ==============================
// CONTROLLER CODE
// ==============================

function playerCreate(characters){
	players = characters.map(function(letter, index){
		return new Player(index, sanitizeInputs(letter));
	}); 
	return players;
}

function sanitizeInputs(letter){

	if (letter.length > 1 || letter === ""){
		alert("Please enter ONE lower case letter a - z, you dummy");
		window.location.reload(false); 
	} 
	else {
		if (letter.charCodeAt() > 89 && letter.charCodeAt() < 123) {	
			return letter.charCodeAt();
		} 
		else if (letter.charCodeAt() < 90 && letter.charCodeAt() > 64) {
			return (letter.charCodeAt() + 32);
		} 
		else {
			alert("Please enter a lower case letter a - z, you dummy.");
			window.location.reload(false); 
		}
	}
}

function updatePlayerPosition(event){ 
	for (i=0;i<players.length;i++){
		if (event.charCode == players[i]["charCode"]) {
			players[i]["position"]++;
		}
	}	
	console.log(players);
}


