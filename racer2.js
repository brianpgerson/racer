window.addEventListener('load', init);


// ==============================
// VIEW CODE
// ==============================

function init() {
	var playersDropDown = document.getElementById("playersDropDown");
	playersDropDown.addEventListener("change", createInputFields, false);
}

function resetInputField(nodeList){
	while (nodeList.hasChildNodes()) {
		nodeList.removeChild(nodeList.firstChild);
	}
}

function getCharacters(){
	var nodeList = document.querySelectorAll('.player');
	var charArray = [];
	for (i=0; i<nodeList.length; i++){
		charArray.push(nodeList[i].value);
	}
	
	return charArray;
}

function createInputFields(event, value){
	var keyInputFields = document.getElementById("playerKeys");
	var howManyFields = event.target.selectedIndex;
	resetInputField(keyInputFields);
	for (i=0; i < howManyFields; i++){
		var fieldHTML = "<br /><label for='player"+i+"'>Key for Player "+(i+1)+":</label><input type='text' class='player'><br />";
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

function playerCreate(array){
	return array.map(function(currentValue, index){
		return new Player(index, currentValue);
	}); 
}


