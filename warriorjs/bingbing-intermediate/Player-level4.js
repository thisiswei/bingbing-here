class Player {
	playTurn(warrior) {
		var spaces = warrior.listen(),
		    stairs = warrior.directionOfStairs(),
		    d = enemy_or_captive(warrior);

		if( spaces.length === 0) {
			warrior.walk( stairs );


		} else if (d.enemy_directions.length > 0) {
			warrior.bind( d.enemy_directions[0] ); 


		} else if (d.captive_directions.length > 0) {
			warrior.attack( d.captive_directions[0] );


		} else if (warrior.health() < 13) {
			warrior.rest();

		} else {
			warrior.walk( d.all_directions[0]);
		}
	}

}


var enemy_or_captive = function (warrior) {

	var spaces = warrior.listen();

	var enemy_directions = [];

	var captive_directions = [];

	var all_directions = [];

	for( var i = 0; i < spaces.length; i ++ ) {

		var space_direction = warrior.directionOf(spaces[i]);

		var is_enemy = warrior.feel(space_direction).isEnemy();

		var is_captive = warrior.feel(space_direction).isCaptive();


		if( is_enemy ) {
			enemy_directions.push( space_direction );
		
		} 
		if (is_captive) {
			captive_directions.push( space_direction );
		}

		all_directions.push(space_direction)

	}
	return { 
		enemy_directions: enemy_directions,
		captive_directions: captive_directions,
		all_directions: all_directions
	}
}








































/*
class Player {
	playTurn(warrior) {

		warrior.walk('backwards');
		warrior.bind('right');
		warrior.attack('right');
		warrior.walk(warrior.directionOfStairs());
		

		var spaces = warrior.listen();
		var directionsFromSpaces = getDirections(spaces, warrior);
		var _direction = pickDirection(directionsFromSpaces, warrior);

		var hasEnemyInMyway = warrior.feel(_direction).isEnemy();
		if (hasEnemyInMyway) {
			warrior.attack(_direction);
		} else {
			warrior.walk(_direction);
		}

	}
}


function getDirections(spaces, warrior) {
	// return directions
	var res = [];
	for (var i=0; i < spaces.length; i++) {
		var dir = warrior.directionOf(spaces[i]);
		if (warrior.feel(dir).isEnemy()) {
			res.push(dir);


		}
	}
	return res;

}


function pickDirection(directions, warrior) {

	// return a direction

    /*
	var directionOfStair = warrior.directionOfStairs();
	var hasEnemyInMyway = warrior.feel(directionOfStair).isEnemy();
	

	var _allDirections = ['left', 'right', 'forward', 'backward'];
	if (!hasEnemyInMyway) {
		return directionOfStair;
	} else {
		// 
		// ['left', 'left', 'right', 'forward'];


		return 'right';
	}
	
	return directions[0];


}
 
class Player {
	playTurn(warrior) {

		var spaces = warrior.listen();
		var stairs = warrior.directionOfStairs();

		if( spaces.length ===0 ) {
			warrior.walk(stairs);
		} else {
			for(var i = 0; i < spaces.length; i ++ ){
				warrior.walk(warrior.directionOf(spaces[i]));
				if(warrior.feel(warrior.directionOf(spaces[i])).isEnemy()) {
					warrior.bind(warrior.directionOf(spaces[i]));
				} else {
					warrior.attack(warrior.directionOf(spaces[i]));
			}
		}
	}
}
}
	
*/