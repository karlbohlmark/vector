var max = require('max');

var sum = function () {
	var args = [].slice.call(arguments);
  // Use the length of the highest dimension vector
  // Count undefined as 0
	var items = max(args.map(function (v) { return v.length}));
	var vectorSum = [];
	for (var i = items; i; i--) {
		vectorSum[i-1] = 0;
		for (var v = args.length; v; v--) {
			vectorSum[i-1] = vectorSum[i-1] + args[v-1][i-1] || 0;
		}
	}
	return vectorSum;
};

module.exports.sum = sum;
