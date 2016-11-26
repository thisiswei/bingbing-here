function reduce(arr, fn, res) {
	//fn(acc, arr-item)
	if(arr.length === 0) {
		return res;
	}
	return reduce(arr.slice(1), fn, fn(res, arr[0]))
}

module.exports = reduce