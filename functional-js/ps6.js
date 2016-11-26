function countWords(inputWords) {
	return inputWords.reduce(function(accurent, fruit) {
		var cnt = accurent[fruit]; 
		if (cnt === undefined ) {
			cnt = 0;
		}

		accurent[fruit] = cnt + 1 ;
		return accurent;
	}, { });
}

module.exports = countWords