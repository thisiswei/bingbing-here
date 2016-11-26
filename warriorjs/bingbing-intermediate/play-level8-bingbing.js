class Player {
	playTurn(warrior) {

		var stairs = warrior.directionOfStairs(),
		    spaces = warrior.listen(),

		    D = enemy_or_captive(warrior),
		    captive_directions = D.captive_directions,
		    all_directions = D.all_directions,
		    enemy_directions = D.enemy_directions,

		    d = count_enemy(warrior), 
		    more_enemy_directions = d.more_enemy_directions,
		    single_enemy_directions = d.single_enemy_directions;


		if (spaces.length === 0) {
			warrior.walk(stairs);

		} else if (warrior.health() < 5 && warrior.feel(enemy_directions[0]).isEnemy()) {
			warrior.walk('left');

		} else if (warrior.health() < 3) {
			warrior.rest();

		} else if (more_enemy_directions.length > 0 && warrior.feel(more_enemy_directions[0]).isEnemy()) {
			warrior.detonate(more_enemy_directions[0]);

		} else if (single_enemy_directions.length > 0 && warrior.feel(single_enemy_directions[0]).isEnemy()) {
			warrior.attack(single_enemy_directions[0]);

		} else if (captive_directions.length > 0 && warrior.feel(captive_directions[0]).isCaptive()) {
			warrior.rescue(captive_directions[0]);

		} else {
			warrior.walk(all_directions[0]);
		}
	}
}


var enemy_or_captive = function (warrior) {

	var spaces = warrior.listen(),
        enemy_directions = [],
        captive_directions = [],
        all_directions = [];

	for(var i = 0; i < spaces.length; i ++ ) {

		var each_direction = warrior.directionOf(spaces[i]);

		if (spaces[i].isEnemy()) {
			enemy_directions.push(each_direction);

		} else if (spaces[i].isCaptive()) {
			captive_directions.push(each_direction);

		}
		all_directions.push(each_direction);
	}
	return {
		enemy_directions: enemy_directions,
		captive_directions: captive_directions,
		all_directions: all_directions
	}
}


var count_enemy = function (warrior) {

	var D = enemy_or_captive(warrior),
	    enemy_directions = D.enemy_directions,
	    more_enemy_directions = [],
	    single_enemy_directions = [];

	    for(var i = 0; i < enemy_directions.length; i ++ ) {

	    	var look_enemy = warrior.look(enemy_directions[i]);

	    	if (look_enemy.length > 1) {
	    		more_enemy_directions.push(enemy_directions[i]);

	    	} else if (look_enemy.length === 1) {
	    		single_enemy_directions.push(enemy_directions[i]);
	    	}
	    }
	    return {
	    	more_enemy_directions: more_enemy_directions,
	    	single_enemy_directions: single_enemy_directions
	    }
	}
























































































































