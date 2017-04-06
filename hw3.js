var row = 1;
var col = 2;
var finished = 0;
var map =[];
map = [
	['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
	['W', 'W', ' ', ' ', ' ', ' ', 'C1', 'W'],
	['W', 'W', ' ', 'W', 'W', 'W', ' ', 'W'],
	['W', 'P1', ' ', 'C2', 'W', 'C3', ' ', 'W'],
	['W', ' ', ' ', ' ', ' ', ' ', 'P2', 'W'],
	['W', 'C4', ' ', ' ', ' ', 'C5', ' ', 'W'],
	['W', 'W', 'W', 'P3', 'W', 'G', ' ', 'W'],
	['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
];


var view =[];
view = [
	['_', '_', '_', '_', '_', '_', '_', '_'],
	['_', '_', '_', '_', '_', '_', '_', '_'],
	['_', '_', '_', '_', '_', '_', '_', '_'],
	['_', '_', '_', '_', '_', '_', '_', '_'],
	['_', '_', '_', '_', '_', '_', '_', '_'],
	['_', '_', '_', '_', '_', '_', '_', '_'],
	['_', '_', '_', '_', '_', '_', '_', '_'],
	['_', '_', '_', '_', '_', '_', '_', '_']
];


function createTable(tableData) {
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

//monster 1
var zombie1 = {
	monster: "Zombie 1",
	health: 10,
	attack: 5,
	runChallenge: function(){
		while(player.health > 0 && zombie1.health > 0){
			player.health -= zombie1.attack;
			zombie1.health -= player.attack;
			document.getElementById('log').innerHTML += "You taken damage. Your hp is at " + player.health + "<br>";
			document.getElementById('log').innerHTML += "The enemy has taken damage. Enemy hp is at " + zombie1.health + "<br>";
		}
		if(player.health < 1 && zombie1.health < 1){
			//return alert("Both combatants are dead");
			document.write("Both combatants are dead. Refresh to restart.");
		}
		else if(player.health > zombie1.health){
			//return alert("You won");
			document.getElementById('log').innerHTML += '<br> You won';
		}
		else{
			//return alert("YOU DIED");
			//document.getElementById('log').innerHTML += '<br> YOU DIED';
			document.write("YOU DIED. Refresh to restart.");
		}		
	}
}

//monster 2
var zombie2 = {
	monster: "Zombie 2",
	health: 10,
	attack: 5,
	runChallenge: function(){
		while(player.health > 0 && zombie2.health > 0){
			player.health -= zombie2.attack;
			zombie2.health -= player.attack;
			document.getElementById('log').innerHTML += "You taken damage. Your hp is at " + player.health + "<br>";
			document.getElementById('log').innerHTML += "The enemy has taken damage. Enemy hp is at " + zombie2.health + "<br>";
		}
		if(player.health < 1 && zombie2.health < 1){
			//return alert("Both combatants are dead");
			document.write("Both combatants are dead. Refresh to restart.");
		}
		else if(player.health > zombie2.health){
			//return alert("You won");
			document.getElementById('log').innerHTML += '<br> You won';
		}
		else{
			//return alert("YOU DIED");
			document.write("YOU DIED. Refresh to restart.");
		}		
	}
}

//monster 3
var spider = {
	monster: "Giant Spider",
	health: 15,
	attack: 10,
	runChallenge: function(){
		while(player.health > 0 && spider.health > 0){
			player.health -= spider.attack;
			spider.health -= player.attack;
			document.getElementById('log').innerHTML += "You taken damage. Your hp is at " + player.health + "<br>";
			document.getElementById('log').innerHTML += "The enemy has taken damage. Enemy hp is at " + spider.health + "<br>";
		}
		if(player.health < 1 && spider.health < 1){
			//return alert("Both combatants are dead");
			document.write("Both combatants are dead. Refresh to restart.");
		}
		else if(player.health > spider.health){
			//return alert("You won");
			document.getElementById('log').innerHTML += '<br> You won';
		}
		else{
			//return alert("YOU DIED");
			document.write("YOU DIED. Refresh to restart.");
		}		
	}
}

//monster 4
var ghost = {
	monster: "Ghost",
	health: 50,
	attack: 5,
	runChallenge: function(){
		while(player.health > 0 && ghost.health > 0){
			player.health -= ghost.attack;
			ghost.health -= player.attack;
			document.getElementById('log').innerHTML += "You taken damage. Your hp is at " + player.health + "<br>";
			document.getElementById('log').innerHTML += "The enemy has taken damage. Enemy hp is at " + ghost.health + "<br>";
		}
		if(player.health < 1 && ghost.health < 1){
			//return alert("Both combatants are dead");
			document.write("Both combatants are dead. Refresh to restart.");
		}
		else if(player.health > ghost.health){
			//return alert("You won");
			document.getElementById('log').innerHTML += '<br> You won';
		}
		else{
			//return alert("YOU DIED");
			document.write("YOU DIED. Refresh to restart.");
		}	
	}
}

//monster 5
var zomKnight = {
	monster: "Zombie Knight",
	health: 100,
	attack: 20,
	
	
	runChallenge: function(){
		while(player.health > 0 && zomKnight.health > 0){
			player.health -= zomKnight.attack;
			zomKnight.health -= player.attack;
			document.getElementById('log').innerHTML += "You taken damage. Your hp is at " + player.health + "<br>";
			document.getElementById('log').innerHTML += "The enemy has taken damage. Enemy hp is at " + zomKnight.health + "<br>";
		}
		if(player.health < 1 && zomKnight.health < 1){
			//return alert("Both combatants are dead");
			document.write("Both combatants are dead. Refresh to restart.");
		}
		else if(player.health > zomKnight.health){
			//return alert("You won");
			document.getElementById('log').innerHTML += '<br> You won';
		}
		else{
			//return alert("YOU DIED");
			document.write("YOU DIED. Refresh to restart.");
		}		
	}

	
}

//Prize 1
var prize1 = {
	prize: "Divine Sword",
	attack: 70,
	addPrize: function(){
		//document.write("You found the divine sword!! <br>")
		document.getElementById('log').innerHTML += '<br> You found the divine sword!! 70 attack points added to your character.';
		player.attack += prize1.attack;
		player.prizes.push.apply(player.prizes, prize1.prize);
	}
}


//Prize 2
var prize2 = {
	prize: "Key 1",
	health: 20,
	addPrize: function(){
		//document.write("You found key 1!! There seems to be energy flowing through this key. You gained 20 hp. <br>")
		document.getElementById('log').innerHTML += '<br>You found key 1!! There seems to be energy flowing through this key. You gained 20 hp.';
		player.health += prize2.health;
		player.prizes.push("Key 1");
	}
}

//Prize 3
var prize3 = {
	prize: "Key 2",
	health: 20,
	addPrize: function(){
		//document.write("You found key 2!! There seems to be energy flowing through this key. You gained 20 hp. <br>")
		document.getElementById('log').innerHTML += '<br>You found key 2!! There seems to be energy flowing through this key. You gained 20 hp.';
		player.health += prize3.health;
		player.prizes.push.apply(player.prizes, prize3.prize);
	}
}

//Goal
var goal = {
	checkPrize: function(){
	for(var i = 0; i < player.length; i++) {
		if (player[i].prizes == 'key 1' && player[i].prizes == 'key 2') {
			return true;
		}
		else{
			return false;
		}
	}
	}
}


var player = {
	prizes:["knife"],
	health: 50,
	attack: 10,
	spawn: map[row][col] = 'S'
};



var gameLogic = function(){
	//document.write("You are currently in (row: " + row + " column: " + col + ") with " + player.health + " hp remaining, " + player.attack + " attack power, and currently have " + player.prizes + " Where do you want to go? North(n), East(e), South(s), West(w). 0 to quit the game <br>");
	document.getElementById('log').innerHTML += '<br>You are currently in (row: ' + row + ' column: ' + col + ') with ' + player.health + ' hp remaining, ' + player.attack + ' attack power, and currently have ' + player.prizes;
}


function direction(elem) {	
		
	switch (elem){
		case "n":
			//document.write("You went north <br>")
			document.getElementById('log').innerHTML += '<br> You went north';
			row -= 1;
			if(map[row][col] == 'W'){
				//document.write("You can't go that way since that's a wall. <br>")
				document.getElementById('log').innerHTML += '<br> You can not go that way since you encountered a wall.';
				row += 1;
				gameLogic();
			} else if(map[row][col] == 'C1'){

				//alert("You have encountered a zombie 1!! ");
				document.getElementById('log').innerHTML += '<br> You have encountered a zombie 1!!';

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						zombie1.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						row += 1;
						gameLogic();
					break;
				}
				/////
				
			} else if(map[row][col] == 'C2'){

				//alert("You have encountered a zombie 2!! ");
				document.getElementById('log').innerHTML += '<br> You have encountered a zombie 2!!';

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						zombie2.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						row += 1;
						gameLogic();
					break;
				}
				/////
			break;
			} else if(map[row][col] == 'C3'){

				//alert("You have encountered a spider!! ");
				document.getElementById('log').innerHTML += '<br> You have encountered spider!!';

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						spider.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						row += 1;
						gameLogic();
					break;
				}
				/////
			break;	
			} else if(map[row][col] == 'C4'){

				//alert("You have encountered a ghost!! ");
				document.getElementById('log').innerHTML += '<br> You have encountered ghost!!';

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						ghost.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						row += 1;
						gameLogic();
					break;
				}
				/////
			break;
			} else if(map[row][col] == 'C5'){

				//alert("You have encountered a zombie knight!! ");
				document.getElementById('log').innerHTML += '<br> You have encountered a zombie knight!!';

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						zomKnight.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						row += 1;
						gameLogic();
					break;
				}
				/////
			break;
			} else if(map[row][col] == 'P1'){
				//alert("you have found a prize room. You have gained the divine sword");
				document.getElementById('log').innerHTML += '<br> You found a prize room containing a divine sword!! 70 attack points added to your character.';
				player.prizes.push("divine sword");
				player.attack += prize1.attack;
				map[row][col] = 'S';
				gameLogic();
				break;
			} else if(map[row][col] == 'P2'){
				//alert("you have found a prize room. You have gained key 1");
				document.getElementById('log').innerHTML += '<br> You found a prize room containing key 1!! There seems to be energy flowing through this key. You gained 20 hp.';
				player.prizes.push("key 1");
				player.health += prize2.health;
				map[row][col] = 'S';
				gameLogic();
			break;
			} else if(map[row][col] == 'P3'){
				//alert("There seems to be energy flowing through this key. You gained 20 attack points.") 
				document.getElementById('log').innerHTML += '<br>You found a prize room key 2!! There seems to be energy flowing through this key. You gained 20 hp.';
				player.prizes.push("key 2");
				player.health += prize3.health;
				map[row][col] = 'S';
				gameLogic();
			break;
			} else if(map[row][col] == 'G'){
				if(goal.checkPrize() == false){
					//alert("You need two keys to get out.");
					document.getElementById('log').innerHTML += '<br> You need two keys to get out.';
					row += 1;
					gameLogic();
				}
				else{
					//alert("You found a way out.");
					document.write("You found a way out and came out alive. Refresh page to restart the game.");
					finished = 1;
				}
			break;
			}else{
					//alert("You entered a empty room");
					document.getElementById('log').innerHTML += '<br> You entered a empty room.';
					gameLogic();
			}
			break;
/////////////////////////////////////////////////////////////
		case "e":
			//document.write("You went east <br>")
			document.getElementById('log').innerHTML += '<br> You went east';
			col += 1;
			if(map[row][col] == 'W'){
				//document.write("You can't go that way since that's a wall. <br>")
				document.getElementById('log').innerHTML += "<br> You can't go that way since that's a wall.";
				col -= 1;
				gameLogic();
			} else if(map[row][col] == 'C1'){

				//alert("You have encountered a zombie 1!! ");
				document.getElementById('log').innerHTML += '<br> You have encountered a zombie 1!!';

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						zombie1.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						col -= 1;
						gameLogic();
					break;
				}
				/////
				
			} else if(map[row][col] == 'C2'){

				//alert("You have encountered a zombie 2!! ");
				document.getElementById('log').innerHTML += '<br> You have encountered a zombie 2!!';

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						zombie2.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						col -= 1;
						gameLogic();
					break;
				}
				/////
			break;
			} else if(map[row][col] == 'C3'){

				//alert("You have encountered a spider!! ");
				document.getElementById('log').innerHTML += '<br> You have encountered a spider!!';

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						spider.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						col -= 1;
						gameLogic();
					break;
				}
				/////
			break;	
			} else if(map[row][col] == 'C4'){

				//alert("You have encountered a ghost!! ");
				document.getElementById('log').innerHTML += '<br> You have encountered a ghost!!';

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						ghost.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						col -= 1;
						gameLogic();
					break;
				}
				/////
			break;
			} else if(map[row][col] == 'C5'){

				//alert("You have encountered a zombie knight!! ");
				document.getElementById('log').innerHTML += '<br> You have encountered a zombie knight!!';

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						zomKnight.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						col -= 1;
						gameLogic();
					break;
				}
				/////
			break;
			} else if(map[row][col] == 'P1'){
				//alert("There seems to be energy flowing through this key. You gained 70 attack points.") 
				document.getElementById('log').innerHTML += '<br> You found a prize room containing a divine sword!! 70 attack points added to your character.';
				player.prizes.push("divine sword");
				player.attack += prize1.attack;
				map[row][col] = 'S';
				gameLogic();
				break;
			} else if(map[row][col] == 'P2'){
				//alert("There seems to be energy flowing through this key. You gained 20 attack points.") 
				document.getElementById('log').innerHTML += '<br>You found a prize room containing key 1!! There seems to be energy flowing through this key. You gained 20 hp.';
				player.prizes.push("key 1");
				player.health += prize2.health;
				map[row][col] = 'S';
				gameLogic();
			break;
			} else if(map[row][col] == 'P3'){
				//alert("There seems to be energy flowing through this key. You gained 20 attack points.")
				document.getElementById('log').innerHTML += '<br>You found a prize room containing key 2!! There seems to be energy flowing through this key. You gained 20 hp.';
				player.prizes.push("key 2");
				player.health += prize3.health;
				map[row][col] = 'S';
				gameLogic();
			break;
			} else if(map[row][col] == 'G'){
				if(goal.checkPrize() == false){
					//alert("You need two keys to get out.");
					document.getElementById('log').innerHTML += '<br>You need two keys to get out.';
					col -= 1;
					gameLogic();
				}
				else{
					//alert("You found a way out.");
					document.write("You found a way out and came out alive. Refresh page to restart the game.");
					finished = 1;
				}
			break;
			}else{
					//alert("You entered a empty room");
					document.getElementById('log').innerHTML += '<br>You entered a empty room.';
					gameLogic();
			}
			break;
//////////////////////////////////////////////////////////
		case "s":
			//document.write("You went south <br>")
			document.getElementById('log').innerHTML += '<br> You went south';
			row += 1;
			if(map[row][col] == 'W'){
				//document.write("You can't go that way since that's a wall. <br>")
				document.getElementById('log').innerHTML += "<br> You can't go that way since that's a wall.";
				row -= 1;
				gameLogic();
			} else if(map[row][col] == 'C1'){

				//alert("You have encountered a zombie 1!! ");
				document.getElementById('log').innerHTML += '<br> You have encountered a zombie 1!!';

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						zombie1.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						row -= 1;
						gameLogic();
					break;
				}
				/////
				
			} else if(map[row][col] == 'C2'){

				//alert("You have encountered a zombie 2!! ");
				document.getElementById('log').innerHTML += '<br> You have encountered a zombie 2!!';

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						zombie2.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						row -= 1;
						gameLogic();
					break;
				}
				/////
			break;
			} else if(map[row][col] == 'C3'){

				//alert("You have encountered a spider!! ");
				document.getElementById('log').innerHTML += '<br> You have encountered a spider!!';

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						spider.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						row -= 1;
						gameLogic();
					break;
				}
				/////
			break;	
			} else if(map[row][col] == 'C4'){

				//alert("You have encountered a ghost!! ");
				document.getElementById('log').innerHTML += '<br> You have encountered a ghost!!';

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						ghost.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						row -= 1;
						gameLogic();
					break;
				}
				/////
			break;
			} else if(map[row][col] == 'C5'){

				//alert("You have encountered a zombie knight!! ");
				document.getElementById('log').innerHTML += '<br> You have encountered a zombie knight!!';

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						zomKnight.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						row -= 1;
						gameLogic();
					break;
				}
				/////
			break;
			} else if(map[row][col] == 'P1'){
				//alert("There seems to be energy flowing through this key. You gained 70 attack points.")
				document.getElementById('log').innerHTML += '<br> You found a prize room containing a divine sword!! 70 attack points added to your character.';				
				player.prizes.push("divine sword");
				player.attack += prize1.attack;
				map[row][col] = 'S';
				gameLogic();
				break;
			} else if(map[row][col] == 'P2'){
				//alert("There seems to be energy flowing through this key. You gained 20 attack points.") 
				document.getElementById('log').innerHTML += '<br> You found a prize room containing key 1!! There seems to be energy flowing through this key. You gained 20 hp.';
				player.prizes.push("key 1");
				player.health += prize2.health;
				map[row][col] = 'S';
				gameLogic();
			break;
			} else if(map[row][col] == 'P3'){
				//alert("There seems to be energy flowing through this key. You gained 20 attack points.")
				document.getElementById('log').innerHTML += '<br> You found a prize room containing key 2!! There seems to be energy flowing through this key. You gained 20 hp.';
				player.prizes.push("key 2");
				player.health += prize3.health;
				map[row][col] = 'S';
				gameLogic();
			break;
			} else if(map[row][col] == 'G'){
				if(goal.checkPrize() == false){
					//alert("You need two keys to get out.");
					document.getElementById('log').innerHTML += '<br> You need two keys to get out.';
					row -= 1;
					gameLogic();
				}
				else{
					//alert("You found a way out.");
					document.write("You found a way out and came out alive. Refresh page to restart the game.");
					finished = 1;
				}
			break;
			}else{
					//alert("You entered a empty room");
					document.getElementById('log').innerHTML += '<br> You entered a empty room';
					gameLogic();
			}
			break;
//////////////////////////////////////////////////////////
		case "w":
			//document.write("You went west <br>")
			document.getElementById('log').innerHTML += '<br> You went west';
			col -= 1;
			if(map[row][col] == 'W'){
				//document.write("You can't go that way since that's a wall. <br>")
				document.getElementById('log').innerHTML += "<br> You can't go that way since that's a wall.";
				col += 1;
				gameLogic();
			} else if(map[row][col] == 'C1'){

				//alert("You have encountered a zombie 1!! ");
				document.getElementById('log').innerHTML += "<br> You have encountered a zombie 1!!";

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						zombie1.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						col += 1;
						gameLogic();
					break;
				}
				/////
				
			} else if(map[row][col] == 'C2'){

				//alert("You have encountered a zombie 2!! ");
				document.getElementById('log').innerHTML += "<br> You have encountered a zombie 2!!";

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						zombie2.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						col += 1;
						gameLogic();
					break;
				}
				/////
			break;
			} else if(map[row][col] == 'C3'){

				//alert("You have encountered a spider!! ");
				document.getElementById('log').innerHTML += "<br> You have encountered a spider!!";

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						spider.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						col += 1;
						gameLogic();
					break;
				}
				/////
			break;	
			} else if(map[row][col] == 'C4'){

				//alert("You have encountered a ghost!! ");
				document.getElementById('log').innerHTML += "<br> You have encountered a ghost!!";

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						ghost.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						col += 1;
						gameLogic();
					break;
				}
				/////
			break;
			} else if(map[row][col] == 'C5'){

				//alert("You have encountered a zombie knight!! ");
				document.getElementById('log').innerHTML += "<br> You have encountered a zombie knight!!";

				switch (prompt("Do you want to fight? Yes(y) or No(n)")){
					case "y":
						zomKnight.runChallenge();
						map[row][col] = 'S';
						gameLogic();
					break;
					case "n":
						col += 1;
						gameLogic();
					break;
				}
				/////
			break;
			} else if(map[row][col] == 'P1'){
				//alert("There seems to be energy flowing through this key. You gained 70 attack points.")
				document.getElementById('log').innerHTML += '<br> You found a prize room containing a divine sword!! 70 attack points added to your character.';
				player.prizes.push("divine sword");
				player.attack += prize1.attack;
				map[row][col] = 'S';
				gameLogic();
				break;
			} else if(map[row][col] == 'P2'){
				//alert("There seems to be energy flowing through this key. You gained 20 attack points.")
				document.getElementById('log').innerHTML += '<br> You found a prize room containing key 1!! There seems to be energy flowing through this key. You gained 20 hp.';
				player.prizes.push("key 1");
				player.health += prize2.health;
				map[row][col] = 'S';
				gameLogic();
			break;
			} else if(map[row][col] == 'P3'){
				//alert("There seems to be energy flowing through this key. You gained 20 attack points.")
				document.getElementById('log').innerHTML += '<br> You found a prize room containing key 2!! There seems to be energy flowing through this key. You gained 20 hp.';
				player.prizes.push("key 2");
				player.health += prize3.health;
				map[row][col] = 'S';
				gameLogic();
			break;
			} else if(map[row][col] == 'G'){
				if(goal.checkPrize() == false){
					//alert("You need two keys to get out.");
					document.getElementById('log').innerHTML += '<br> You need two keys to get out.';
					col += 1;
					gameLogic();
				}
				else{
					//alert("You found a way out.");
					document.write("You found a way out and came out alive. Refresh page to restart the game.");
					finished = 1;
				}
			break;
			}else{
					//alert("You entered a empty room");
					document.getElementById('log').innerHTML += '<br> You entered a empty room.';
					gameLogic();
			}
			break;
//////////////////////////////////////////////////////////
		case "0":
		finished = 1;
		//document.getElementById('log').innerHTML += '<br> Quitting game.';
		document.write("Game is over. Refresh to restart.");
		break;
			}
		}


function mainGame(){
	document.getElementById('log').innerHTML += '<br> You awaken in a dark room. Find your way out of the darkness.';
	
	do{
	
		direction(elem);

	}while(player.health != 0 || finished != 1);

	
	//document.write("The game is over. Refresh page to restart.");
	document.getElementById('log').innerHTML += '<br> Game is over.';
	
}

createTable(map);
//createTable(view);

$(document).ready(function(){

	mainGame();

});

