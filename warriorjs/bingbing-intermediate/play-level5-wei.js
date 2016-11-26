class Player {
	playTurn(warrior) {
		var bb = bingbing(warrior)
		if (bb.hasEnemy()) {
			warrior.bind(bb.hasEnemy());
		} else if (bb.bloodIsLower()) {
			warrior.walk('backward');
		} else if (bb.hasCaptive()) {
			warrior.rescue(bb.hasCaptive());
		} else {
			console.log('hey');
			warrior.walk(bb.enemyDirections().nextMove[0]);
		}
	}
}


function bingbing(warrior) {
	return {
		directions: function() {
			return ['left', 'right', 'backward', 'forward'];
		},
		hasEnemy: function (){
			var directions = this.directions();
			for (var i = 0; i < directions.length; i++) {
				if (this.isEnemy(directions[i])) {
					return directions[i];
				}
			}
		},
		isEnemy: function(direction) {
			return warrior.feel(direction).isEnemy();
		},
		bloodIsLower: function() {
			return warrior.health() < 8;
		},
		nextDirection: function() {
		},
		hasCaptive: function() {

		},
		enemyDirections: function() {
			var spaces = warrior.listen();
			var res = [],
			    nextMove = [];
			for (var i = 0; i < spaces.length; i++) {
				var direction = warrior.directionOf(spaces[i]);
				res.push(direction);
				if (direction != warrior.directionOfStairs()) {
					nextMove.push(direction);

				}
				
			}
			return {
				'directions': res,
				'nextMove': nextMove
			};
		}
	}
}