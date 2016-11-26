module.exports = function(namespace) {
	return function() {
		var args = Array.prototype.slice.call(arguments);
		return module.bind(undefined, namespace, args); 
	}
}
