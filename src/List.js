BJ.List = function(array) {	var _ary;	if(array == null) {		_ary = new Array();	} else {		_ary = array;	}	_ary.each = function(func) {		for(var j = 0 ; j < _ary.length ; j += 1) {			var obj = _ary[j];			if(func(j, obj) == false) {				break;			}		}	}	_ary.contains = function(element, same) {		var ret = false;		if(typeof element == "object") {			var obj = new BJ.Object(element, true);			_ary.each(function(i, _element) {				if(same === true) {					if(obj.same(_element)) {						ret = true;						return false;					}				} else if(obj.equals(_element)) {					ret = true;					return false;				}			});		} else {			_ary.each(function(i, _element) {				if(_element === element) {					ret = true;					return false;				}			});		}		return ret;	}	return _ary;}