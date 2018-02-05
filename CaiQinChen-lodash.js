/**
 * 注释说明：
 * 这个是干嘛的
 * 参数是干嘛的
 * 返回什么
 * 例子
 */


var CaiQinChen = {

	/**
	 * 将数组拆分成多个 size 长度的块，并组成一个新数组。 
	 * 如果数组无法被分割成全部等长的块，那么最后剩余的元素将组成一个块。
	 * arr：需要被处理的数组，
	 * m ：数组长度，
	 * return ：新组成的数组，
	 * 例：
	 * _.chunk(['a', 'b', 'c', 'd'], 2);
	 * // => [['a', 'b'], ['c', 'd']]
	 * _.chunk(['a', 'b', 'c', 'd'], 3);
	 * // => [['a', 'b', 'c'], ['d']]
	 */

	chunk: function(arr, m) {
		var result = []
		var temp = []
		for (var i = 0; i < arr.length; i++) {
			var j = i % m
			temp.push(arr[i])
			if (j == m - 1 || i == arr.length - 1) {
				result.push(temp)
				j = 0
				temp = []
			}
		}
		return result
	},


	/**
	 * 创建一个移除了所有假值的数组。
	 * 例如：false、null、 0、""、undefined， 以及NaN 都是 “假值”.
	 * arr：需要被处理的数组，
	 * return ：新组成的数组，
	 * 例：
	 * _.compact([0, 1, false, 2, '', 3]);
	 * // => [1, 2, 3]
	 */

	compact: function(arr) {
		var result = []
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] != false) {
				result.push(arr[i])
			}
		}
		return result
	},


	/**
	 * 创建一个用任何数组 或 值连接的新数组。
	 * arr：需要被处理的数组，
	 * value：需要被连接的值的队列,
	 * return ：连接后的新数组,
	 * 例：
	 * var array = [1];
	 * var other = _.concat(array, 2, [3], [[4]]);
	 * console.log(other);
	 * // => [1, 2, 3, [4]]
	 * console.log(array);
	 * // => [1]
	 */

	concat: function(arr, value) {

	},


	/**
	 * 创建一个差异化后的数组。
	 * arr：需要被处理的数组，
	 * value：用于对比差异的数组，
	 * return ：返回一个差异化后的新数组。
	 * 例：
	 * _.compact([0, 1, false, 2, '', 3]);
	 * // => [1, 2, 3]
	 */

	difference: function(arr, value) {
		var result = []
		for (var i = 0; i < arr.length; i++) {
			var temp = arr[i]
			var count = 0
			for (var j = 0; j < value.length; j++) {
				if (value[j] != temp) {
					count++
				}
				if (count == value.length) {
					result.push(temp)
					count = 0
				}
			}
		}
		return result
	},


	/**
	 * 裁剪数组中的前 N 个数组，返回剩余的部分。
	 * arr：需要被处理的数组，
	 * value：裁剪的个数，
	 * return ：返回数组的剩余的部分。
	 * 例：
	 * _.drop([1, 2, 3]);
	 * // => [2, 3]
	 *
	 * _.drop([1, 2, 3], 2);
	 * // => [3]
	 *
	 * _.drop([1, 2, 3], 5);
	 * // => []
	 *
	 * _.drop([1, 2, 3], 0);
	 * // => [1, 2, 3]
	 */

	drop: function(arr, value) {
		if (value == undefined) {
			value = 1
		}
		for (i = 0; i < value; i++) {
			var result = arr.shift(0)
		}
		return arr
	},


	/**
	 * 从右边开始裁剪数组中的 N 个数组，返回剩余的部分。
	 * arr：需要被处理的数组，
	 * value：裁剪的个数，
	 * return ：返回数组的剩余的部分。
	 * 例：
	 * _.dropRight([1, 2, 3]);
	 * // => [1, 2]
	 *
	 * _.dropRight([1, 2, 3], 2);
	 * // => [1]
	 *
	 * _.dropRight([1, 2, 3], 5);
	 * // => []
	 *
	 * _.dropRight([1, 2, 3], 0);
	 * // => [1, 2, 3]
	 */

	dropRight: function(arr, value) {
		if (value == undefined) {
			value = 1
		}
		for (i = 0; i < value; i++) {
			var result = arr.pop(0)
		}
		return arr
	},


	/**
	 * 指定 值 填充数组，从 start 到 end 的位置，但不包括 end 本身的位置。
	 * 注意: 这个方法会改变数组
	 * arr：需要填充的数组，
	 * value：填充的值，
	 * start：开始位置，
	 * end：结束位置。
	 * return ：返回数组。
	 * 例：
	 * var array = [1, 2, 3];
	 * 
	 * _.fill(array, 'a');
	 * console.log(array);
	 * // => ['a', 'a', 'a']
	 *
	 * _.fill(Array(3), 2);
	 * // => [2, 2, 2]
	 *
	 * _.fill([4, 6, 8, 10], '*', 1, 3);
	 * // => [4, '*', '*', 10]
	 */

	fill: function(arr, value, start, end) {
		if (start == undefined) {
			start = 0
		}
		if (end == undefined) {
			end = arr.length
		}
		arr.splice(start, end - start)
		for (var i = 0; i < end - start; i++) {
			arr.splice(start + i, 0, value)
		}
		return arr
	},


	/**
	 * 向上一级展平数组嵌套。
	 * arr：需要展平的数组，
	 * return ：返回展平后的新数组。
	 * 例：
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */

	flatten: function(arr) {
		var result = []
		for (var i = 0; i < arr.length; i++) {
			if (typeof arr[i] == 'object') {
				for (var j = 0; j < arr[i].length; j++) {
					result.push(arr[i][j])
				}
			}
			var lab = i
		}
		for (var k = 0; k < lab; k++) {
			result.unshift(arr[k])
		}
		return result
	},


	/**
	 * 递归展平。
	 * arr：需要展平的数组，
	 * return ：返回展平后的新数组。
	 * 例：
	 * _.flattenDeep([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, 3, 4, 5]
	 */

	flattenDeep: function(arr) {

		function flattenOnce(arr) {
			var result = []
			var l = arr.length
			for (var i = 0; i <= l; i++) {
				if (typeof arr[i] == 'object') {
					for (var j = 0; j < arr[i].length; j++) {
						result.push(arr[i][j])
					}
				}
				if (typeof arr[i] == 'number') {
					result.push(arr[i])
				}
			}
			return result
		}
		var newResult = flattenOnce(arr)
		for (var i = 0; i < newResult.length; i++) {
			if (typeof newResult[i] == 'object') {
				newResult = flattenOnce(newResult)
			}
		}
		return newResult
	},


	/**
	 * 反向版 _.toPairs，这个方法返回一个由键值对构成的对象。
	 * arr：键值对，
	 * return ：返回一个新对象。
	 * 例：
	 * _.fromPairs([['fred', 30], ['barney', 40]]);
	 * // => { 'fred': 30, 'barney': 40 }
	 */

	fromPairs: function(arr) {
		var obj = {}
		for (i = 0; i < arr.length; i++) {
			for (j = 0; j < arr[i].length - 1; j++) {
				obj[arr[i][j]] = arr[i][j + 1]
			}
		}
		return obj
	},


	/**
	 * 获取数组中除了最后一个元素之外的所有元素
	 * arr：需要检索的数组 (Array)
	 * return ：返回没有最后一个元素的数组
	 * 例：
	 * _.initial([1, 2, 3]);
	 * // => [1, 2]
	 */

	initial: function(arr) {
		var result = []
		for (i = 0; i < arr.length - 1; i++) {
			result.push(arr[i])
		}
		return result
	},


	/**
	 * 创建一个包含所有使用 SameValueZero 进行等值比较后筛选的唯一值数组。
	 * arr：需要处理的数组队列，
	 * return ：返回数组中所有数组共享元素的新数组。
	 * 例：
	 * _.intersection([2, 1], [2, 3]);
	 * // => [2]
	 */

	intersection: function(arr1, arr2) {
		var bigArr = [arr1, arr2]
		var common = []
		for (i = 0; i < bigArr.length - 1; i++) {
			for (j = 0; j < arr1.length; j++) {
				if (bigArr[i][j] == bigArr[i + 1][j]) {
					common.push(bigArr[i][j])
					return common
				}
			}
		}
	},


	/**
	 * 移除所有经过 SameValueZero 等值比较为 true 的元素,
	 * 注意: 不同于 _.without，这个方法会改变数组。
	 * arr：需要调整的数组,
	 * value：要移除的值,
	 * return ：返回数组本身。
	 * 例：
	 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	 *
	 * _.pull(array, 'a', 'c');
	 * console.log(array);
	 * // => ['b', 'b']
	 */

	pull: function(arr, value1, value2) {
		for (i = arr.length - 1; i >= 0; i--) {
			if (arr[i] == value1) {
				arr.splice(i, 1)
			}
		}
		for (i = arr.length - 1; i >= 0; i--) {
			if (arr[i] == value2) {
				arr.splice(i, 1)
			}
		}

		return arr
	},


	/**
	 * 这个方式类似 _.pull，除了它接受数组形式的一系列值。
	 * 注意: 不同于 _.difference，这个方法会改变数组。
	 * arr：需要调整的数组,
	 * value：要移除的值,
	 * return ：返回数组本身。
	 * 例：
	 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	 *
	 * _.pullAll(array, ['a', 'c']);
	 * console.log(array);
	 * // => ['b', 'b']
	 */

	pullAll: function(arr, value) {
		for (k = 0; k <= value.length; k++) {
			for (i = arr.length - 1; i >= 0; i--) {
				if (arr[i] == value[k]) {
					arr.splice(i, 1)
				}
			}
		}
		return arr
	},


	/**
	 * 根据给的 indexes 移除对应的数组元素并返回被移除的元素。
	 * 注意: 不同于 _.at，这个方法会改变数组。
	 * arr：需要调整的数组,
	 * index：可以是特殊的数组队列，或者个别的单个或多个参数,
	 * return ：返回被移除的元素数组。
	 * 例：
	 * var array = ['a', 'b', 'c', 'd'];
	 * var pulled = _.pullAt(array, [1, 3]);
	 *
	 * console.log(array);
	 * // => ['a', 'c']
	 *
	 * console.log(pulled);
	 * // => ['b', 'd']
	 */

	pullAt: function(arr, index) {
		var start = index[0]
		var end = index[1]
		var out1 = arr.splice(start, 1)
		var tmp = ''
		arr.splice(start, 0, tmp)
		var out2 = arr.splice(end, 1)
		var pulled = out1.concat(out2)
		return pulled
	},


	/**
	 * 将数组最前面的元素返回置数组尾部。
	 * arr：需要调整的数组,
	 * return ：返回调整后的数组。
	 * 例：
	 * var array = [1, 2, 3];
	 *
	 * _.reverse(array);
	 * // => [3, 2, 1]
	 *
	 * console.log(array);
	 * // => [3, 2, 1]
	 */

	reverse: function(arr) {
		var result = []
		for (i = 0; i < arr.length; i++) {
			result.unshift(arr[i])
		}
		return result
	},


	/**
	 * 以 separator 拆分字符串。
	 * 注意: 这个方法基于 String#split。
	 * str：要拆分的字符串,
	 * separa：拆分的分隔符,
	 * limit：限制的数量。
	 * return：返回拆分部分的字符串的数组。
	 * 例：
	 * _.split('a-b-c', '-', 2);
	 * // => ['a', 'b']
	 */

	split: function(str, separa, limit) {
		var arr = []
		arr.push(str)
		var stringScarp = arr[0].split(separa)
		var result = stringScarp.splice(0, limit)
		return result
	},


	/**
	 * 获取数组中除了第一个元素的剩余数组。
	 * arr：要检索的数组,
	 * return：返回数组中除了第一个元素的剩余数组。
	 * 例：
	 * _.tail([1, 2, 3]);
	 * // => [2, 3]
	 */

	tail: function(arr) {
		var result = arr.splice(1, arr.length)
		return result
	},


	/**
	 * 获取数组中第一个元素。
	 * arr：要检索的数组,
	 * return：返回数组中第一个元素。
	 * 例：
	 * _.head([1, 2, 3]);
	 * // => 1
	 *
	 * _.head([]);
	 * // => undefined
	 */

	head: function(arr) {
		var arrScarp = arr.splice(0, 1)
		var result = arrScarp[0]
		return result
	},


	/**
	 * 从数组的起始元素开始提取 N 个元素。
	 * arr：要处理的数组,
	 * value：要提取的个数，
	 * return：返回提取的元素数组。
	 * 例：
	 * _.take([1, 2, 3]);
	 * // => [1]
	 *
	 * _.take([1, 2, 3], 2);
	 * / => [1, 2]
	 *
	 * _.take([1, 2, 3], 5);
	 * // => [1, 2, 3]
	 *
	 * _.take([1, 2, 3], 0);
	 * // => []
	 */

	take: function(arr, value) {
		if (!value) {
			return []
		}
		arr.splice(value, value + 1)
		return arr
	},


	/**
	 * 创建一个经过 iteratee 处理的集合中每一个元素的结果数组。 
	 * iteratee 会传入 3 个参数：(value, index|key, collection)。
	 * arr：需要遍历的集合,
	 * fn：这个函数会处理每一个元素，
	 * return：返回映射后的新数组。
	 * 例：
	 * function square(n) {
	 *     return n * n;
	 *  }
	 *
	 * _.map([4, 8], square);
	 * // => [16, 64]
	 *
	 * _.map({ 'a': 4, 'b': 8 }, square);
	 * // => [16, 64] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *    { 'user': 'barney' },
	 *    { 'user': 'fred' }
	 *    ];
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */

	map: function(arr, fn) {
		var result = []
		for (var i = 0; i < arr.length; i++) {
			result.push(fn(arr[i], i, arr))
		}
		return result
	},


	/**
	 * 遍历集合中的元素，筛选出一个经过 predicate 检查结果为真值的数组。
	 * predicate 会传入 3 个参数：(value, index|key, collection)。
	 * predicate：需要遍历的集合,
	 * fn：这个函数会处理每一个元素，
	 * return：返回筛选结果的新数组。
	 * 例：
	 * var users = [
	 *     { 'user': 'barney', 'age': 36, 'active': true },
	 *     { 'user': 'fred',   'age': 40, 'active': false }
	 *     ];
	 *
	 * _.filter(users, function(o) { return !o.active; });
	 * // => objects for ['fred']
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.filter(users, { 'age': 36, 'active': true });
	 * // => objects for ['barney']
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.filter(users, ['active', false]);
	 * // => objects for ['fred']
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.filter(users, 'active');
	 * // => objects for ['barney']
	 */

	filter: function(collection, fn) {
		var result = []
		for (var i = 0; i < collection.length; i++) {
			if (fn(collection[i], i, collection)) {
				result.push(collection[i])
			}
		}
		return result
	},


	/**
	 * 创建一个拆分为两部分的数组。 
	 * 第一部分是 predicate 检查为真值的，第二部分是 predicate 检查为假值的。 
	 * predicate 会传入 3 个参数：(value, index|key, collection)。
	 * arr：需要遍历的集合,
	 * fn：这个函数会处理每一个元素，
	 * return：返回筛选结果的新数组。
	 * 例：
	 * var users = [
	 *   { 'user': 'barney',  'age': 36, 'active': false },
	 *   { 'user': 'fred',    'age': 40, 'active': true },
	 *   { 'user': 'pebbles', 'age': 1,  'active': false }
	 *   ];
	 *
	 * _.partition(users, function(o) { return o.active; });
	 * // => objects for [['fred'], ['barney', 'pebbles']]
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.partition(users, { 'age': 1, 'active': false });
	 * // => objects for [['pebbles'], ['barney', 'fred']]
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.partition(users, ['active', false]);
	 * // => objects for [['barney', 'pebbles'], ['fred']]
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.partition(users, 'active');
	 * // => objects for [['fred'], ['barney', 'pebbles']]
	 */

	partition: function(arr, fn) {
		var ret = [
			[],
			[]
		]
		for (var i = 0; i < arr.length; i++) {
			if (fn(arr[i], i, arr)) {
				ret[0].push(arr[i])
			} else {
				ret[1].push(arr[i])
			}
		}
		return ret
	},


	/**
	 * 将数组中的所有元素转换为由 separator 分隔的字符串。
	 * arr：需要转换的数组，
	 * sepra：分隔符，
	 * return：返回连接好的字符串。
	 * 例：
	 * _.join(['a', 'b', 'c'], '~');
	 * // => 'a~b~c'
	 */

	join: function(arr, sepra) {
		var newArr = []
		for (var i = 0; i < arr.length; i++) {
			newArr.push(arr[i])
			if (i != arr.length - 1) {
				newArr.push(sepra)
			}
		}
		var result = newArr.join('')
		return result
	},


	/**
	 * 获取数组中的最后一个元素。
	 * arr：要检索的数组，
	 * return：返回数组中的最后一个元素。
	 * 例：
	 * _.last([1, 2, 3]);
	 * // => 3'
	 */

	last: function(arr) {
		var result = arr.pop()
		return result
	},


	/**
	 * 根据 value 使用 SameValueZero 等值比较返回数组中首次匹配的 index。
	 * 如果 fromIndex 为负值，将从数组尾端索引进行匹配。
	 * 如果将 fromIndex 设置为 true，将使用更快的二进制检索机制。
	 * arr：要检索的数组，
	 * value：要检索的值，
	 * index ：需要检索的起始位置，如果为 true 将使用二进制检索方式。
	 * return：返回匹配值的 index，否则返回 -1。
	 * 例：
	 * _.indexOf([1, 2, 1, 2], 2);
	 * // => 1
	 *
	 * // Search from the `fromIndex`.
	 * _.indexOf([1, 2, 1, 2], 2, 2);
	 * // => 3
	 */

	indexOf: function(arr, value, index) {
		if (index == undefined) {
			index = 0
		}
		for (var i = index; i < arr.length; i++) {
			if (arr[i] == value) {
				return i
			}
		}
	},


	/**
	 * 这个方法类似 _.indexOf，除了它是从右到左遍历元素的。
	 * arr：要检索的数组，
	 * value：要检索的值，
	 * index ：需要检索的起始位置。
	 * return：返回匹配值的 index，否则返回 -1。
	 * 例：
	 * _.lastIndexOf([1, 2, 1, 2], 2);
	 * // => 3
	 *
	 * // Search from the `fromIndex`.
	 * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	 * // => 1
	 */

	lastIndexOf: function(arr, value, index) {
		if (index == undefined) {
			index = 0
		}
		for (var i = arr.length - index; i >= 0; i--) {
			if (arr[i] == value) {
				return i
			}
		}
	},


	/**
	 * 检索元素的位置，并输出该位次下的元素。
	 * 如果 n 为负数，那么则从结尾处反向检索
	 * arr：要检索的数组，
	 * value：要检索的值，
	 * return：返回匹配的元素。
	 * 例：
	 * var array = ['a', 'b', 'c', 'd'];
	 *
	 * _.nth(array, 1);
	 * // => 'b'
	 *
	 * _.nth(array, -2);
	 * // => 'c';
	 */

	nth: function(arr, value) {
		var result
		if (value >= 0) {
			result = arr[value]
			return result
		}
		var newArr = []
		for (var i = 0; i < arr.length; i++) {
			newArr.unshift(arr[i])
		}
		result = newArr[-value - 1]
		return result
	},


	/**
	 * 通过 iteratee 遍历集合中的每个元素。 每次返回的值会作为下一次 iteratee 使用。
	 * 如果没有提供 accumulator，则集合中的第一个元素作为 accumulator。 
	 * iteratee 会传入 4 个参数：(accumulator, value, index|key, collection)。
	 * arr：需要遍历的集合，
	 * fn：这个函数会处理每一个元素，
	 * initial ：初始化的值。
	 * return：返回累加后的值。
	 * 例：
	 * _.reduce([1, 2], function(sum, n) {
	 *   return sum + n;
	 * }, 0);
	 * // => 3
	 *
	 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	 *   (result[value] || (result[value] = [])).push(key);
	 *   return result;
	 * }, {});
	 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
	 */

	reduce: function(arr, fn, initial) {
		var start = 0
		if (initial == undefined) {
			initial = arr[0]
			start = 1
		}
		var result = initial
		for (var i = initial; i < arr.length; i++) {
			result = fn(result, arr[i])
		}
		return result
	},


	/**
	 * 使用二进制的方式检索来决定 value 应该插入在数组中位置。
	 * 它的 index 应该尽可能的小以保证数组的排序。
	 * arr：要检索的数组，
	 * value：要评估位置的值，
	 * return：返回 value 应该在数组中插入的 index。
	 * 例：
	 * _.sortedIndex([30, 50], 40);
	 * // => 1
	 */

	sortedIndex: function(arr, value) {
		for (var i = 0; i <= arr.length; i++) {
			if (arr[i] > value) {
				return i
			}
		}
	},


	/**
	 * 从数组的结束元素开始提取 N 个数组。
	 * arr：要处理的数组,
	 * value：要提取的个数，
	 * return：返回提取的元素数组。
	 * 例：
	 * _.takeRight([1, 2, 3]);
	 * // => [3]
	 *
	 * _.takeRight([1, 2, 3], 2);
	 * // => [2, 3]
	 *
	 * _.takeRight([1, 2, 3], 5);
	 * // => [1, 2, 3]
	 *
	 * _.takeRight([1, 2, 3], 0);
	 * // => []
	 */

	takeRight: function(arr, value) {
		if (value == undefined) {
			value = 1
		}
		var newArr = []
		for (var i = arr.length - 1; i >= arr.length - value; i--) {
			newArr.unshift(arr[i])
			if (i <= 0) {
				break
			}
		}
		return newArr
	},


	/**
	 * 创建顺序排列的唯一值组成的数组。所有值经过 SameValueZero 等值比较。
	 * arguments：要处理的数组,
	 * return：返回处理好的数组。
	 * 例：
	 * _.union([2], [1, 2]);
	 * // => [2, 1]
	 */

	union: function() {
		var newArr = []
		for (var i = 0; i < arguments.length; i++) {
			for (var j = 0; j < arguments[i].length; j++) {
				newArr.push(arguments[i][0])
				break
			}
		}
		return newArr
	},


	/**
	 * 创建一个不重复的数组副本。使用了 SameValueZero 等值比较。
	 * 只有首次出现的元素才会被保留。
	 * arr：要处理的数组,
	 * return：返回处理好的数组。
	 * 例：
	 * _.uniq([2, 1, 2]);
	 * // => [2, 1]
	 */

	uniq: function(arr) {
		var result = []
		var count
		result.push(arr[0])
		for (var i = 0; i < arr.length; i++) {
			count = 0
			for (var j = 0; j < result.length; j++) {
				if (arr[i] != result[j]) {
					count++
				}
			}
			if (count == result.length) {
				result.push(arr[i])
			}
		}
		return result
	},


	/**
	 * 这个方法类似 _.zip，除了它接收一个打包后的数组并且还原为打包前的状态。
	 * arr：需要解包的已打包数组,
	 * return：返回一个解包后的数组。
	 * 例：
	 * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
	 * // => [['fred', 30, true], ['barney', 40, false]]
	 *
	 * _.unzip(zipped);
	 * // => [['fred', 'barney'], [30, 40], [true, false]]
	 */

	unzip: function(arr) {
		var result = []
		for (var i = 0; i <= arr[0].length; i++) {
			result[i] = []
			for (var j = 0; j < arr.length; j++) {
				result[i][j] = arr[j][i]
			}
		}
		return result
	},


	/**
	 * 创建一个打包所有元素后的数组。
	 * 第一个元素包含所有提供数组的第一个元素，第二个包含所有提供数组的第二个元素，以此类推。
	 * arr：要处理的数组队列,
	 * return：返回一个打包后的数组。
	 * 例：
	 * _.zip(['fred', 'barney'], [30, 40], [true, false]);
	 * // => [['fred', 30, true], ['barney', 40, false]]
	 */


	zip: function(arr) {
		var result = []
		for (var i = 0; i <= arr[0].length; i++) {
			result[i] = []
			for (var j = 0; j < arr.length; j++) {
				result[i][j] = arr[j][i]
			}
		}
		return result
	},


	/**
	 * 创建一个移除了所有提供的 values 的数组。使用了 SameValueZero 等值比较。
	 * arr：要处理的数组队列,
	 * value：要排除的值。
	 * return：返回一个打包后的数组。
	 * 例：
	 * _.without([1, 2, 1, 3], 1, 2);
	 * // => [3]
	 */

	without: function(arr, value1, value2) {
		var result = []
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] != value1 && arr[i] != value2) {
				result.push(arr[i])
			}
		}
		return result
	},


	/**
	 * 创建一个包含了所有唯一值的数组。使用了 symmetric difference 等值比较。
	 * arr：要处理的数组，
	 * value：要排除的值。
	 * return：包含了所有唯一值的新数组。
	 * 例：
	 * _.xor([2, 1], [2, 3]);
	 * // => [1, 3]
	 */

	xor: function() {
		var bigArr = []
		for (var i = 0; i < arguments.length; i++) {
			bigArr = bigArr.concat(arguments[i])
		}
		var result = []
		var count
		var temp
		for (var i = 0; i < bigArr.length; i++) {
			temp = bigArr[i]
			count = 0
			for (var j = 0; j < bigArr.length; j++) {
				if (temp == bigArr[j]) {
					count++
				}
			}
			if (count == 1) {
				result.push(bigArr[i])
			}
		}
		return result
	},


	/**
	 * 转换字符串为 驼峰写法。
	 * str：要转换的字符串。
	 * return：返回驼峰写法的字符串。
	 * 例：
	 * _.camelCase('Foo Bar');
	 * // => 'fooBar'
	 *
	 * _.camelCase('--foo-bar');
	 * // => 'fooBar'
	 *
	 * _.camelCase('__foo_bar__');
	 * // => 'fooBar'
	 */


	camelCase: function(str) {
		//探测分隔符
		var strLower = str.toLowerCase()
		var count
		var separator
		for (var i = 0; i < strLower.length; i++) {
			count = 0
			for (var j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
				if (strLower[i] == String.fromCharCode(j)) {
					count++
				}
			}
			if (count == 0) {
				separator = strLower[i]
				break
			}
		}
		//分隔单词，去分隔符，首字母大写
		var strScarp = strLower.split(separator)
		var result = ""
		count = 0
		for (var i = 0; i < strScarp.length; i++) {
			if (strScarp[i] != "") {
				if (count == 0) {
					result = result + strScarp[i]
					count++
				} else {
					result = result + strScarp[i].substring(0, 1).toUpperCase() + strScarp[i].substring(1)
				}
			}
		}
		return result
	},


	/**
	 * 转换字符串首字母为大写，剩下为小写。
	 * str：要大写开头的字符串。
	 * return：返回大写开头的字符串。
	 * 例：
	 * _.capitalize('FRED');
	 * // => 'Fred'
	 */

	capitalize: function(str) {
		var strUpper = str.toUpperCase()
		var result = strUpper.substring(0, 1) + strUpper.substring(1).toLowerCase()
		return result
	},


	/**
	 * 转换 latin-1 supplementary letters#Character_table) 为基本拉丁字母，并删除变音符。
	 * str：要处理的字符串。
	 * return：返回处理后的字符串。
	 * 例：
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */

	deburr: function(str) {

	},


	/**
	 * 检查给定的字符是否是字符串的结尾。
	 * str：要检索的字符串。
	 * target：要检索字符，
	 * index：检索的位置。
	 * return：如果是结尾返回 true，否则返回 false。
	 * 例：
	 * _.endsWith('abc', 'c');
	 * // => true
	 *
	 * _.endsWith('abc', 'b');
	 * // => false
	 *
	 * _.endsWith('abc', 'b', 2);
	 * // => true
	 */

	endsWith: function(str, target, index) {
		if (index == undefined) {
			index = 1
		}
		if (str[str.length - index] == target) {
			return true
		} else {
			return false
		}
	},


	/**
	 * 创建一个键值倒置的对象。 
	 * 如果 object 有重复的值，后面的值会覆盖前面的值。 
	 * 如果 multiVal 为 true，重复的值则组成数组。
	 * obj：要倒置的对象。
	 * [multiVal]：每个 key 允许多个值，
	 * return：返回新的倒置的对象
	 * 例：
	 * var object = { 'a': 1, 'b': 2, 'c': 1 };
	 *
	 * _.invert(object);
	 * // => { '1': 'c', '2': 'b' }
	 */

	invert: function(obj) {
		var newObj = {}
		for (var key in obj) {
			newObj[obj[key]] = key
		}
		return newObj
	},


	/**
	 * 创建 object 自身可枚举属性名为一个数组。
	 * 注意: 非对象的值会被强制转换为对象，查看 ES spec 了解详情
	 * obj：要检索的对象。
	 * return：返回包含属性名的数组。
	 * 例：
	 * function Foo() {
	 * this.a = 1;
	 * this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */

	keys: function(obj) {
		var resultArr = []
		for (var key in obj) {
			resultArr.push(key)
		}
		return resultArr
	},


	/**
	 * 使用 iteratee 遍历对象的自身和继承的可枚举属性。
	 * iteratee 会传入 3 个参数：(value, key, object)。
	 * 如果返回 false，iteratee 会提前退出遍历。
	 * obj：要遍历的对象。
	 * return：返回对象。
	 * 例：
	 *
	 * function Foo() {
	 * this.a = 1;
	 * this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.forIn(new Foo, function(value, key) {
	 * console.log(key);
	 * });
	 * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
	 */

	forIn: function(obj, fn) {

	},

	/**
	 * 返回集合的长度或对象中可枚举属性的个数。
	 * collection：待处理的集合。
	 * return：返回集合的大小。
	 * 例：
	 *
	 * function Foo() {
	 * this.a = 1;
	 * this.b = 2;
	 * }
	 *
	 * _.size([1, 2, 3]);
	 * // => 3
	 *
	 * _.size({ 'a': 1, 'b': 2 });
	 * // => 2
	 *
	 * _.size('pebbles');
	 * // => 7
	 */

	size: function(collection) {
		if (Array.isArray(collection)) {
			return collection.length
		}
		var l = 0
		for (var key in collection) {
			l++
		}
		return l
	},


	/**
	 * 创建 object 自身可枚举属性的值为数组
	 * 注意: 非对象的值会强制转换为对象
	 * obj：要检索的对象。
	 * return：返回包含属性名的数组。
	 * 例：
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */

	value: function(obj) {
		var result = []
		for (var key in obj) {
			result.push(obj[key])
		}
		return result
	},


	/**
	 * 通过 predicate 检查集合中的元素是否都返回真值。
	 * 只要 predicate 返回一次假值，遍历就停止，并返回 false。
	 * predicate 会传入 3 个参数：(value, index|key, collection)
	 * [predicate=_.identity]：这个函数会处理每一个元素。
	 * return：返回 true，如果所有元素经 predicate 检查都为真值，否则返回 false。
	 * 例：
	 * _.every([true, 1, null, 'yes'], Boolean);
	 * // => false
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': false },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.every(users, { 'user': 'barney', 'active': false });
	 * // => false
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.every(users, ['active', false]);
	 * // => true
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.every(users, 'active');
	 * // => false
	 */

	every: function(collection, predicate) {
		if (!predicate) {
			predicate = function(temp) {
				return temp
			}
		}
		if (Array.isArray(collection)) {
			for (var i = 0; i < collection.length; i++) {
				if (!predicate(collection[i], i, collection)) {
					return false
				}
			}
			return true
		} else {
			for (var key in collection) {
				if (!predicate(collection[key], key, collection)) {
					return false
				}
			}
			return true
		}
	},


	/**
	 * 反向版_.before.这个方法创建一个新函数，当调用N次或者多次之后将触发		func方法。
	 * 参数：
	 * 1. n (number) 方法应该在调用多少次之后执行。
	 * 2. func (Function) 指定的触发方法。
	 * 返回值：
	 * 返回限定的函数。
	 */

	after: function(n, fn) {
		var runningTimes = 0
		return function(arg) {
			runningTimes++
			if (runningTimes >= n) {
				return fn(arg)
			}
		}
	},


	/**
	 * 创建一个调用func的函数。调用次数不超过N次。之后再调用这个函数，将返回最后一个调用的结果。
	 * 参数：
	 * 1. n (number) 超过多少次不再调用func。
	 * 2. func (Function) 指定的触发方法。
	 * 返回值：
	 * 返回限定的函数。
	 */


	before: function(n, fn) {
		var runningTimes = 0
		return function(arg) {
			var lastReturnValue
			runningTimes++
			if (runningTimes <= n) {
				return (lastReturnValue = fn(arg))
			} else {
				return lastReturnValue
			}
		}
	},


	/**
	 * 创建一个深比较的方法来比较给定的对象和source对象。如果给定的对象拥有相同的属性值返回true，否则返回false。
	 * 参数：
	 * 1. source (Object) 要匹配的原对象。
	 * 返回值：
	 * 返回新的函数。
	 */

	matches: function(source) {
		return function(object) {
			for (key in object) {
				if (object[key] == source[object]) {
					return true
				} else {
					return false
				}
			}
		}
	},


	/**
	 * 这个方法类似_.difference，除了它接受一个iteratee调用每一个数组和值。iteratee会传入一个参数：(value)。
	 * 参数：
	 * 1. array (Array) 需要处理的数组。
	 * 2. [values](...Array) 用来对比差异的数组。
	 * 3. [iteratee= _.identity] (Function|object|string)这个函数会处理每一个元素。
	 * 返回值：
	 * 返回一个差异化的新数组。
	 */

	differenceBy: function(arr, value, identity) {
		if (typeof(identity) == 'function') {
			var newArr = arr.map(identity)
			var compare = value.map(identity)
			for (i = 0; i < arr.length; i++) {
				for (j = 0; j < value.length; j++) {
					if (newArr[i] === compare[i]) {
						arr.splice(i - 1, 1)
					}
				}
			}
			return arr
		}
		var section
		var result
		if (typeof identity == 'string') {
			for (var i = 0; i < arr.length; i++) {
				section = true
				for (var j = 0; j < value.length; j++) {
					if (arr[i][identity] == value[j][identity]) {
						section = false
					}
				}
				if (section) {
					result.push(arr[i])
				}
			}
		}
		return result
	},


	/**
	 * 这个方法类似_.difference，除了它接受一个comparator调用每一个数组元素的值。comparator会传入2个参数：(arrVal, othVal)。
	 * 参数：
	 * 1. array (Array) 需要处理的数组。
	 * 2. [values](...Array) 用来对比差异的数组。
	 * 3. [comparator] (Function)这个函数会处理每一个元素。
	 * 返回值：
	 * 返回一个差异化的新数组。
	 */

	differenceWith: function(arr, value, fn) {
		var newArr = arr.map(fn)
		var compare = value.map(fn)
		for (i = 0; i < arr.length; i++) {
			for (j = 0; j < value.length; j++) {
				if (newArr[i] === compare[i]) {
					arr.splice(i - 1, 1)
				}
			}
		}
		return arr
	},


	/**
	 * 从右边开始裁剪数组，起点从predicate返回假值开始。predicate会传入3个参数：(value,index,array)。
	 * 参数：
	 * 1. array (Array) 需要处理的数组。
	 * 2. [predicate=_.identity]	(Function|Object|string) 这个函数会在每一次迭代调用。
	 * 返回值：
	 * 返回裁剪后的数组。
	 */

	dropRightWhile: function(arr, fn) {

	},


	/**
	 * This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.
	 * Arguments: 
	 * array (Array): The array to inspect.
	 * [predicate=_.identity] (Function): The function invoked per iteration.
	 * [fromIndex=0] (number): The index to search from.
	 * Returns: 
	 * (number): Returns the index of the found element, else -1.
	 */


	findIndex: function(arr, predicate, index) {
		if (index === undefind) {
			index = 0
		}
		if (typeof(predicate) == 'function') {
			for (index = 0; index < arr.length; index++) {
				if (arr[index] == predicate()) {
					return index
				}
			}
		}
	},
}
