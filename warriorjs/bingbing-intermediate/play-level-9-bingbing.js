class Player {
	playTurn(warrior) {
		var spaces = warrior.listen(), 
		    stairs = warrior.directionOfStairs(),

		    D = enemy_ticking_captive(warrior),
		    enemy_directions = D.enemy_directions,
		    ticking_directions = D.ticking_directions,
		    captive_directions = D.captive_directions,
		    all_directions = D.all_directions;


		    if(spaces.length === 0) {
		    	warrior.walk(stairs);

		    } else if (warrior.health() < 5 && warrior.feel(enemy_directions[0]).isEnemy()) {
		    	
		    }


		    } else if (warrior.feel(ticking_directions[0]).isTicking()) {
		    	warrior.rescue(ticking_directions[0]);

		    } else if (warrior.feel(ticking_directions[0]).isEnemy()) {
		    	warrior.attack(ticking_directions[0]);

		    } else if (ticking_directions.length > 0) {
		    	warrior.walk(ticking_directions[0]);

		    } else if (warrior.feel(enemy_directions[0]).isEnemy()) {
		    	warrior.attack(enemy_directions[0]);

		    } else if (warrior.feel(captive_directions[0]).isCaptive()) {
		    	warrior.rescue(captive_directions[0]);

		    } else {
		    	warrior.walk(all_directions[0]);
		    }
		}
	}


var enemy_ticking_captive = function(warrior) {

	var spaces = warrior.listen(),
	    all_directions = [],
	    enemy_directions = [],
	    ticking_directions = [],
	    if_ticking = 0,
	    captive_directions = [];

	for (var i = 0; i < spaces.length; i ++ ) {

		var space_direction = warrior.directionOf(spaces[i]);

		if (spaces[i].isTicking()) {
			ticking_directions.push(space_direction);

		} else if (spaces[i].isEnemy()) {
			enemy_directions.push(space_direction);

		} else if (spaces[i].isCaptive()) {
			captive_directions.push(space_direction);
		}
		all_directions.push(space_direction);
	}
	return {
		all_directions: all_directions,
		enemy_directions: enemy_directions,
		ticking_directions: ticking_directions,
		captive_directions: captive_directions
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
























































































































