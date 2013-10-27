BJ.Object = function(object) {
	var _obj;
	if(object != null) {
		_obj = object;
	} else {
		_obj = new Object();
	}

	_obj.hashCode = function() {
		
		return 1;
	}

	return _obj;
}