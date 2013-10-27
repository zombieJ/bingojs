module("Object");
test("each", function() {
	var obj = new BJ.Object();
	
	QUnit.notEqual(obj.hashCode(), null);
});

module("List");
test("each", function() {
	var list = new BJ.List();
	var num = 0;
	var sum = 0;
	list.push(1, 2, 3);
	list.each(function(i, _number) {
		num += 1;
		sum += _number;
	});
	QUnit.equal(num, 3);
	QUnit.equal(sum, 6);
});

test("contains", function() {
	var list = new BJ.List([1, 3, 5]);
	QUnit.ok(list.contains(1));
	QUnit.ok(list.contains(3));
	QUnit.ok(list.contains(5));
	QUnit.ok(!list.contains(2));
	QUnit.ok(!list.contains(4));
	QUnit.ok(!list.contains("1"));
});