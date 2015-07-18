window.addEventListener('load', init);


// ==============================
// VIEW CODE
// ==============================

function handleInitializeClick(){
	console.log(playerCreate(getCharacters()));
	var playerObject = playerCreate(getCharacters());
	hide(document.getElementById("input"));
	setUpTrack(playerObject.length);
}

function init() {
	document.getElementById("playersDropDown").addEventListener("change", createInputFields, false);
	document.getElementById("init").addEventListener("click", handleInitializeClick, false);
}

function getCharacters(){
	var nodeList = document.querySelectorAll('.player');
	var characters = [];
	for (i=0; i<nodeList.length; i++){
		characters.push(nodeList[i].value);
		console.log(characters);
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
	var keyInputFields = document.getElementById("playerKeys");
	var howManyFields = event.target.selectedIndex;
	resetInputField(keyInputFields);
	for (i=0; i < howManyFields; i++){
		var fieldHTML = "<br /><label for='player"+i+"'>Key for Player "+(i+1)+": </label><input type='text' class='player'><br />";
		keyInputFields.innerHTML += fieldHTML;
	}
}

function hide(section){
	section.setAttribute("class", "hidden");
}

//----------------
// create track section
//----------------

function setUpTrack(playerNum) {
	var trackLength = 5;
	var block = createRows(trackLength);
	var course = document.getElementById("track");
	var playerColumns = "<ul class = 'players' id = 'player"+i+"'>" + block + "</ul>";
	for (i=0;i<playerNum;i++){
		course.innerHTML += playerColumns;
	}
	document.getElementById('track').setAttribute("style","width:" + (playerNum*124) + "px;");
}

function createRows(howMany){
	var indyPiece = "<li><div class='piece'></div></li>"
	var trackHTML = "";
	for (i=0;i<=howMany-1;i++){
		trackHTML+=indyPiece;
	}
	return trackHTML;
}



// ==============================
// MODEL CODE
// ==============================

function Player(id, charCode){
	this.id = id;
	this.position = 0;
	this.charCode = charCode;	
}

// ==============================
// CONTROLLER CODE
// ==============================

function playerCreate(characters){
	return characters.map(function(letter, index){
		return new Player(index, sanitizeInputs(letter));
	}); 
}

    var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
     alert("My alert.");
     localStorage.setItem('alerted','yes');
    }

function sanitizeInputs(letter){

	if (letter.length > 1 || letter == null){
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



