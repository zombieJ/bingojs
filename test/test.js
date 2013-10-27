module("Object");
test("equals", function() {
	var obj1 = new BJ.Object({a: 1});
	var obj2 = new BJ.Object({a: 1});
	var obj3 = new BJ.Object({a: 1, b: 2});
	var obj4 = new BJ.Object({a: 2});
	var obj5 = new BJ.Object({a: "1"});
	QUnit.ok(obj1.equals(obj2));
	QUnit.ok(obj1.equals(obj3));
	QUnit.ok(!obj1.equals(obj4));
	QUnit.ok(!obj1.equals(obj5));
	QUnit.ok(!obj3.equals(obj1));
});

test("same", function() {
	var obj1 = new BJ.Object({a: 1, c: 6});
	var obj2 = new BJ.Object({a: 1, c: 6});
	var obj3 = new BJ.Object({a: 1, c:6, b: 2});
	QUnit.ok(obj1.same(obj2));
	QUnit.ok(!obj1.same(obj3));
});

test("clone", function() {
	var obj1 = new BJ.Object({a: 1, b: "6", c: false});
	var obj2 = obj1.clone();
	QUnit.equal(obj2.a, obj1.a);
	QUnit.equal(obj2.b, obj1.b);
	QUnit.equal(obj2.c, obj1.c);
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
	var list = new BJ.List([1, 3]);
	QUnit.ok(list.contains(1));
	QUnit.ok(list.contains(3));
	QUnit.ok(!list.contains(2));
	QUnit.ok(!list.contains("1"));

	var list2 = new BJ.List([{a: 1, b: 2}, {a: 3, d: 4}]);
	QUnit.ok(list2.contains({a: 1, b: 2}));
	QUnit.ok(!list2.contains({a: 1, b: 2, c: 3}));
	QUnit.ok(list2.contains({a: 3, d: 4}));
	
	a = list2;
});