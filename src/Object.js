BJ.Object = function(object, clone) {
	function __clone(obj) {
		var cloner = new Object();
		for(var i in obj) {
			if (obj.hasOwnProperty(i)) {
				cloner[i] = obj[i];
			}
		}
		return cloner;
	}

	function __equals(obj1, obj2) {
		if(obj1 == null && obj2 == null) return true;
		if(obj1 == null || obj2 == null) return false;

		var ret = true;
		for(var i in obj1) {
			if (obj1.hasOwnProperty(i) && typeof obj1[i] !== "function") {
				if(obj1[i] !== obj2[i]) {
					ret = false;
					break;
				}
			}
		}
		return ret;
	}

	var _obj;
	if(object != null && clone === true) {
		_obj = __clone(object);
	} else if(object != null) {
		_obj = object;
	} else {
		_obj = new Object();
	}

	_obj.equals = function(obj) {
		return __equals(_obj, obj);
	}

	_obj.same = function(obj) { 
		return __equals(_obj, obj) && __equals(obj, _obj);
	}

	_obj.clone = function() {
		var obj = __clone(_obj);
		return new BJ.Object(obj);
	}

	return _obj;
}