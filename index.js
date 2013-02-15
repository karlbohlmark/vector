var sum = function () {
	var args = [].slice.call(arguments);
	var items = args[0].length;
	var vectorSum = [];
	for (var i = items; i; i--) {
		vectorSum[i-1] = 0;
		for (var v = args.length; v; v--) {
			vectorSum[i-1] = vectorSum[i-1] + args[v-1][i-1];
		}
	}
	return vectorSum;
};

module.exports.sum = sum;
