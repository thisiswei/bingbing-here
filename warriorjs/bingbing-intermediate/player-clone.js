/* class Player {
  playTurn(warrior) {
  	var dunkin = warrior.directionOfStairs();
  	if(warrior.feel(dunkin).isEnemy()) {
  		warrior.attack(dunkin);
  	} else {
  		warrior.walk(dunkin);
  	}
  }
}
*/

class Player {
	playTurn(warrior) {
		var fourdr = ['left', 'right', 'forward', 'backward'];

		var enemyNo = direction(warrior);
		var stairs = warrior.directionOfStairs();
		if(enemyNo > 1) {
			warrior.bind(fourdr[enemyNo]);
		} else if(warrior.feel(stairs).isEnemy()) {
			warrior.attack(stairs);
		} else {
			warrior.walk(stairs);
		}
	}
}

var direction = function (warrior) {
	var fourdr = ['left', 'right', 'forward', 'backward'];
	var e = 0;
	for (var i = 0; i < fourdr.length; i ++) {
		 if(warrior.feel(fourdr[i]).isEnemy()) {
		 	e ++;		  
		 }
	}
	console.log(e);
	return e;
}











/*
class Player {
	playTurn(warrior) {
		var binded = [];
		var enemyDirection = getEnemyDirection(warrior);
		if (enemyDirection && binded.indexOf(enemyDirection) == -1) {
			warrior.bind(enemyDirection);
			binded.push(enemyDirection);
		}
		else if (warrior.feel(warrior.directionOfStairs()).isEnemy()) {
		 	warrior.attack(warrior.directionOfStairs());
		}
		else {
			warrior.walk(warrior.directionOfStairs());
		}

	}

}
var getEnemyDirection = function(warrior) {
	var dr = ['left', 'right', 'forward', 'backward'];
	for( var i = 0; i < dr.length; i ++ ) {
			if(warrior.feel(dr[i]).isEnemy()) {
				return dr[i]; 
			} 
		}
}
*/