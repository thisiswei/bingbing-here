var slice = Array.prototype.slice;

/* bingbing's answer
function logger(namespace) {
	return function() {
		var args = [].slice.call(arguments);
		if (args.length > 1) {
			return 
		}
		return logger.apply(null, console.log(arguments)); 
	}
}
*/

/* Print the output to the console directly */
/* wei's answer */ 
function logger(namespace) {
	return function() {
		var args = slice.call(arguments);
		console.log( namespace + " " + args.join(" ") )
	}
}

/* offical answer 
function logger(namespace) {
    return function() {
        console.log.apply(console, [namespace].concat(slice.call(arguments)))
    };
}*/ 

module.exports = logger