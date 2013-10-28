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

	var obj6 = new BJ.Object({a: 1, b: [1, 2], c: {a: "1", b: "5"}});
	var obj7 = new BJ.Object({a: 1, b: [1, 2], c: {a: "1", b: "5"}});
	var obj8 = new BJ.Object({a: 1, b: [1, 2], c: {a: "1", b: "5", c: false}});
	QUnit.ok(obj6.equals(obj7));
	QUnit.ok(obj6.equals(obj8));
	QUnit.ok(!obj8.equals(obj6));
});

test("same", function() {
	var obj1 = new BJ.Object({a: 1, c: 6});
	var obj2 = new BJ.Object({a: 1, c: 6});
	var obj3 = new BJ.Object({a: 1, c:6, b: 2});
	QUnit.ok(obj1.same(obj2));
	QUnit.ok(!obj1.same(obj3));

	var obj4 = new BJ.Object({a: 1, c: [[1]]});
	var obj5 = new BJ.Object({a: 1, c: [[1]]});
	var obj6 = new BJ.Object({a: 1, c: [[1]], d: "3"});
	QUnit.ok(obj4.same(obj5));
	QUnit.ok(!obj4.same(obj6));
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

test("indexOf", function() {
	var list = new BJ.List([1, 3, 5]);
	QUnit.equal(list.indexOf("1"), -1);
	QUnit.equal(list.indexOf(1), 0);
	QUnit.equal(list.indexOf(3), 1);
	QUnit.equal(list.indexOf(5), 2);

	var list = new BJ.List([{a: 1}, {c: [1, 2]}]);
	QUnit.equal(list.indexOf({a: 1}), 0);
	QUnit.equal(list.indexOf({a: false}), -1);
	QUnit.equal(list.indexOf({a: 1, b: 2}), -1);
	QUnit.equal(list.indexOf({c: [1]}), 1);
	QUnit.equal(list.indexOf({c: [1]}, true), -1);
});

test("contains", function() {
	var list = new BJ.List([1, 3]);
	QUnit.ok(list.contains(1));
	QUnit.ok(list.contains(3));
	QUnit.ok(!list.contains(2));
	QUnit.ok(!list.contains("1"));

	var list2 = new BJ.List([{a: 1, b: 2}, {a: 3, d: 4}]);
	QUnit.ok(list2.contains({a: 1}));
	QUnit.ok(list2.contains({a: 1, b: 2}));
	QUnit.ok(!list2.contains({a: 1}, true));
	QUnit.ok(!list2.contains({a: 1, b: 2, c: 3}));
	QUnit.ok(list2.contains({a: 3, d: 4}));
});

test("same", function() {
	var list1 = new BJ.List([1, 2, 3]);
	var list2 = new BJ.List([1, 2, 3]);
	var list3 = new BJ.List([1, 2, 3, 4]);
	var list4 = new BJ.List([1, 5, 3]);
	QUnit.ok(list1.same(list2));
	QUnit.ok(!list1.same(list3));
	QUnit.ok(!list1.same(list4));
});

test("remove", function() {
	var list = new BJ.List([1, 2, 3, 4, 5]);
	QUnit.ok(list.remove(2));
	QUnit.ok(list.same([1, 3, 4, 5]));
	QUnit.ok(!list.same([1, 2, 3, 4, 5]));

	var list2 = new BJ.List([{a: 1, b: 2}]);
	QUnit.ok(list2.remove({a: 1}));
	QUnit.ok(list2.same([]));
	
	var list3 = new BJ.List([{a: 1, b: 2}]);
	QUnit.ok(!list3.remove({a: 1}, true));
	QUnit.ok(list3.same([{a: 1, b: 2}]));
});

test("removeAll", function() {
	var list = new BJ.List([1, 2, 3, 4, 5]);
	QUnit.ok(list.removeAll([2, 4]));console.log(list);
	QUnit.ok(list.same([1, 3, 5]));
});