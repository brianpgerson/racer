window.addEventListener('load', init);


// ==============================
// VIEW CODE
// ==============================

function init() {
	document.getElementById("playersDropDown").addEventListener("change", createInputFields, false);
	document.getElementById("init").addEventListener("click", handleInitializeClick, false);
}

function handleInitializeClick(){
	console.log(playerCreate(getCharacters()));
}

function resetInputField(nodeList){
	while (nodeList.hasChildNodes()) {
		nodeList.removeChild(nodeList.firstChild);
	}
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

function createInputFields(event, value){
	var keyInputFields = document.getElementById("playerKeys");
	var howManyFields = event.target.selectedIndex;
	resetInputField(keyInputFields);
	for (i=0; i < howManyFields; i++){
		var fieldHTML = "<br /><label for='player"+i+"'>Key for Player "+(i+1)+": </label><input type='text' class='player'><br />";
		keyInputFields.innerHTML += fieldHTML;
	}
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

function sanitizeInputs(letter){
	if (letter.length > 1 || letter == null){
		alert("Please enter ONE lower case letter a - z, you dummy");
	} else {
		if (letter.charCodeAt() > 89 && letter.charCodeAt() < 123) {	
			return letter.charCodeAt();
		} else if (letter.charCodeAt() < 90 && letter.charCodeAt() > 64) {
			return (letter.charCodeAt() + 32);
		} else {
			alert("Please enter a lower case letter a - z, you dummy.");
		}
	}
}



