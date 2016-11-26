class Player {
	playTurn(warrior) {

		var spaces = warrior.listen(), 
		    stairs = warrior.directionOfStairs(),

		    D = enemy_or_captive_directions(warrior),
		    rest_directions = stairs_or_empty(warrior).rest_directions;


		if (spaces.length === 0) {
			warrior.walk(stairs);

		} else if (warrior.health() < 5 && D.enemy_directions.length === 0 ) {
			warrior.rest();

		} else if (warrior.health() < 5 && D.enemy_directions.length > 0 ) {
			warrior.walk(rest_directions[0]);
		} 

		else if (D.enemy_directions.length > 0) {
			warrior.bind(D.enemy_directions[0]);

		} else if (D.captive_directions.length > 0) {
			warrior.attack(D.captive_directions[0]);
			console.log(D.captive_directions[0]);

		} else if (rest_directions.length < 4) {
			warrior.walk(rest_directions[0]);

		} else { 
			warrior.walk(D.all_directions[0]);
		} 
	}
}





var enemy_or_captive_directions = function(warrior) {

	var spaces = warrior.listen(),
	    enemy_directions =[],
	    all_directions = [],
	    captive_directions = [],
	    goodDirection = [];
        

	    for (var i = 0; i < spaces.length; i ++ ) {

	    	var space_direction = warrior.directionOf(spaces[i]),
	    	    is_enemy = warrior.feel(space_direction).isEnemy(),
	    	    is_captive = warrior.feel(space_direction).isCaptive();

	    	if (is_enemy) {
	    		enemy_directions.push(space_direction);

	    	} else if (is_captive) {
	            captive_directions.push(space_direction);
	    	} else {
	    		goodDirection.push(space_direction);
	    	}
	        all_directions.push(space_direction);
	    } 

	  


	    return {
	    	enemy_directions: enemy_directions,
	    	captive_directions: captive_directions,
	    	all_directions: all_directions,
	    	goodDirection: goodDirection

	}
}



var stairs_or_empty = function(warrior) {

	var four_directions = ['left','forward', 'right', 'backward'],
	    rest_directions = [],
	    empty_directions;

	for (var i = 0; i < four_directions.length; i ++) {
		if (warrior.feel(four_directions[i]).isStairs()) {

		} else if (warrior.feel(four_directions[i]).isEmpty()) {
			rest_directions.push(four_directions[i]);
		}
	}
    
		
	return {
		rest_directions: rest_directions,
		empty_directions: empty_directions
	};

}























































































