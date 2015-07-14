var charCodes = [112, 113];

function playerCreate(array){
	return array.map(function(currentValue, index){
		return new Player(index, currentValue);
	}); 
}

function Player(id, charCode){
	this.id = id;
	this.position = 0;
	this.charCode = charCode;	
}

var players = playerCreate(charCodes);
console.log(players);
