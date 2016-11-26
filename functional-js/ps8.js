function duckCount() {

	var args = [].slice.call(arguments);

	return args.reduce(function(acc, arg) {
		if(Object.prototype.hasOwnProperty.call(arg, 'quack')) {
			return acc + 1;
		}
		return acc;
	}, 0);
}

module.exports = duckCount
