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

module("Date");
test("getTime", function() {
	var dateOri = new Date();
	var date = new BJ.Date(dateOri);
	QUnit.equal(date.getTime(), dateOri.getTime());
});

test("getTimezoneOffset", function() {
	var dateOri = new Date();
	var date = new BJ.Date(dateOri, 123);
	QUnit.equal(date.getTimezoneOffset(), 123);
});

test("getYear", function() {
	var dateOri = new Date();
	var date = new BJ.Date(dateOri);
	QUnit.equal(date.getYear(), dateOri.getFullYear());
});

test("getMonth", function() {
	var dateOri = new Date();
	var date = new BJ.Date(dateOri);
	QUnit.equal(date.getMonth(), dateOri.getMonth());
});

test("getDate", function() {
	var dateOri = new Date(1383150030647);
	var date = new BJ.Date(dateOri);
	var date0 = new BJ.Date(dateOri, 0);
	QUnit.equal(date.getDate(), dateOri.getDate());
	QUnit.equal(date0.getDate(), dateOri.getDate() - 1);
});

test("getDay", function() {
	var dateOri = new Date();
	var date = new BJ.Date(dateOri);
	QUnit.equal(date.getDay(), dateOri.getDay());
});

test("getHours", function() {
	var dateOri = new Date();
	var date = new BJ.Date(dateOri);
	var date0 = new BJ.Date(dateOri, 0);
	QUnit.equal(date.getHours(), dateOri.getHours());
	QUnit.equal(date0.getHours(), (dateOri.getHours() + 16) % 24);
});

test("getMinutes", function() {
	var dateOri = new Date();
	var date = new BJ.Date(dateOri);
	QUnit.equal(date.getMinutes(), dateOri.getMinutes());
});

test("getSeconds", function() {
	var dateOri = new Date();
	var date = new BJ.Date(dateOri);
	QUnit.equal(date.getSeconds(), dateOri.getSeconds());
});

test("getMilliseconds", function() {
	var dateOri = new Date();
	var date = new BJ.Date(dateOri);
	QUnit.equal(date.getMilliseconds(), dateOri.getMilliseconds());
});

test("setYear", function() {
	var dateOri = new Date(1383230862836);
	var date = new BJ.Date(dateOri, 0);
	QUnit.equal(date.getYear(), 2013);
	QUnit.equal(date.getMonth(), 9);
	QUnit.equal(date.getDate(), 31);

	date.setYear(1998);
	QUnit.equal(date.getYear(), 1998);
	QUnit.equal(date.getMonth(), 9);
	QUnit.equal(date.getDate(), 31);

	date.setYear(1997, 3);
	QUnit.equal(date.getYear(), 1997);
	QUnit.equal(date.getMonth(), 4);
	QUnit.equal(date.getDate(), 1);

	date.setYear(2011, 10, 5);
	QUnit.equal(date.getYear(), 2011);
	QUnit.equal(date.getMonth(), 10);
	QUnit.equal(date.getDate(), 5);
});

test("setMonth", function() {
	var dateOri = new Date(1383230862836);
	var date = new BJ.Date(dateOri);

	date.setMonth(2);
	QUnit.equal(date.getYear(), 2013);
	QUnit.equal(date.getMonth(), 2);
	QUnit.equal(date.getDate(), 31);

	date.setMonth(3, 1);
	QUnit.equal(date.getYear(), 2013);
	QUnit.equal(date.getMonth(), 3);
	QUnit.equal(date.getDate(), 1);
});

test("setDate", function() {
	var dateOri = new Date(1383230862836);
	var date = new BJ.Date(dateOri);

	date.setDate(4);
	QUnit.equal(date.getYear(), 2013);
	QUnit.equal(date.getMonth(), 9);
	QUnit.equal(date.getDate(), 4);

	date.setDate(0);
	QUnit.equal(date.getYear(), 2013);
	QUnit.equal(date.getMonth(), 8);
	QUnit.equal(date.getDate(), 30);
});

test("setHours", function() {
	var date = new BJ.Date();
	date.setHours(5);
	QUnit.equal(date.getHours(), 5);

	date.setHours(7, 9);
	QUnit.equal(date.getHours(), 7);
	QUnit.equal(date.getMinutes(), 9);

	date.setHours(8, 4, 3);
	QUnit.equal(date.getHours(), 8);
	QUnit.equal(date.getMinutes(), 4);
	QUnit.equal(date.getSeconds(), 3);

	date.setHours(5, 8, 1, 45);
	QUnit.equal(date.getHours(), 5);
	QUnit.equal(date.getMinutes(), 8);
	QUnit.equal(date.getSeconds(), 1);
	QUnit.equal(date.getMilliseconds(), 45);
});

test("setMinutes", function() {
	var date = new BJ.Date();

	date.setMinutes(56);
	QUnit.equal(date.getMinutes(), 56);

	date.setMinutes(12, 34);
	QUnit.equal(date.getMinutes(), 12);
	QUnit.equal(date.getSeconds(), 34);

	date.setMinutes(7, 8, 53);
	QUnit.equal(date.getMinutes(), 7);
	QUnit.equal(date.getSeconds(), 8);
	QUnit.equal(date.getMilliseconds(), 53);
});

test("setSeconds", function() {
	var date = new BJ.Date();

	date.setSeconds(43);
	QUnit.equal(date.getSeconds(), 43);

	date.setSeconds(24, 932);
	QUnit.equal(date.getSeconds(), 24);
	QUnit.equal(date.getMilliseconds(), 932);
});

test("setMilliseconds", function() {
	var date = new BJ.Date();

	date.setMilliseconds(153);
	QUnit.equal(date.getMilliseconds(), 153);
});

test("setTime", function() {
	var date = new BJ.Date(1383230862836);

	QUnit.equal(date.getTime(), 1383230862836);
	date.setTime(1383232932532);
	QUnit.equal(date.getTime(), 1383232932532);
});

test("toString", function() {
	var date = new BJ.Date(1383230862836);

	QUnit.equal(date.toString("yyyy-MM-dd HH:mm:ss"), "2013-10-31 22:47:42");
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
	QUnit.ok(list.removeAll([2, 4]));
	QUnit.ok(list.same([1, 3, 5]));
});

test("size", function() {
	var list = new BJ.List([1, 2, 3, 4, 5]);
	QUnit.equal(list.size(), 5);
});

module("Set");
test("same", function() {
	var set = new BJ.Set([1, 2, 3]);
	QUnit.ok(set.same([1, 2, 3]));
	QUnit.ok(set.same([3, 1, 2]));
	QUnit.ok(!set.same([1, 2]));
	QUnit.ok(!set.same([1, 2, 3, 4]));
});

test("add", function() {
	var set = new BJ.Set([1, 2, 3]);
	QUnit.ok(set.add(4));
	QUnit.ok(set.same([4, 2, 3, 1]));
	QUnit.ok(!set.add(1));
	QUnit.ok(set.same([1, 2, 3, 4]));
});