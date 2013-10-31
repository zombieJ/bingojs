BJ.Date = function(date, offset) {
	var _obj = new Object();
	var _date;
	var _offset;
	var _dateGen;
	if(date != null) {
		if(typeof date == "number") {
			_date = new Date(date);
		} else {
			_date = date;
		}
	} else {
		_date = new Date();
	}
	if(offset != null) {
		_offset = offset;
	} else {
		_offset = _date.getTimezoneOffset() * 60000;
	}

	function __genDate() {
		_dateGen = new Date(_date.getTime() + _date.getTimezoneOffset() * 60000 - _offset);
	}

	function __oriDate() {
		_date = new Date(_dateGen.getTime() - _date.getTimezoneOffset() * 60000 + _offset);
	}

	function __fillZero(value, len) {
		if(len == null) {
			len = 2;
		}
		var _val = value + "";
		while(_val.length < len) {
			_val = "0" + _val;
		}
		return _val;
	}

	// first generate output date
	__genDate();

	_obj.toDate = function() {
		return _date;
	}

	_obj.getTime = function() {
		return _date.getTime();
	}

	_obj.getTimeOffset = function() {
		return _offset;
	}

	_obj.getYear = function() {
		return _dateGen.getFullYear();
	}

	_obj.getMonth = function() {
		return _dateGen.getMonth();
	}

	_obj.getDate = function() {
		return _dateGen.getDate();
	}

	_obj.getHours = function() {
		return _dateGen.getHours();
	}

	_obj.getMinutes = function() {
		return _dateGen.getMinutes();
	}

	_obj.getSeconds = function() {
		return _dateGen.getSeconds();
	}

	_obj.getMilliseconds = function() {
		return _dateGen.getMilliseconds();
	}

	_obj.setYear = function(year, month, date) {
		if(month != null && date != null) {
			_dateGen.setFullYear(year, month, date);
		} else if(month != null) {
			_dateGen.setFullYear(year, month);
		} else {
			_dateGen.setFullYear(year);
		}
		__oriDate();
		__genDate();
	}

	_obj.setMonth = function(month, date) {
		if(date != null) {
			_dateGen.setMonth(month, date);
		} else {
			_dateGen.setMonth(month);
		}
		__oriDate();
		__genDate();
	}

	_obj.setDate = function(date) {
		_dateGen.setDate(date);
		__oriDate();
		__genDate();
	}

	_obj.setHours = function(hour, min, sec, millisec) {
		if(min != null && sec != null && millisec != null) {
			_dateGen.setHours(hour, min, sec, millisec);
		} else if(min != null && sec != null) {
			_dateGen.setHours(hour, min, sec);
		} else if(min != null) {
			_dateGen.setHours(hour, min);
		} else {
			_dateGen.setHours(hour);
		}
		__oriDate();
		__genDate();
	}

	_obj.setMinutes = function(min, sec, millisec) {
		if(sec != null && millisec != null) {
			_dateGen.setMinutes(min, sec, millisec);
		} else if(sec != null) {
			_dateGen.setMinutes(min, sec);
		} else {
			_dateGen.setMinutes(min);
		}
		__oriDate();
		__genDate();
	}

	_obj.setSeconds = function(sec, millisec) {
		if(millisec != null) {
			_dateGen.setSeconds(sec, millisec);
		} else {
			_dateGen.setSeconds(sec);
		}
		__oriDate();
		__genDate();
	}

	_obj.setMilliseconds = function(millisec) {
		_dateGen.setMilliseconds(millisec);
		__oriDate();
		__genDate();
	}

	_obj.setTime = function(value) {
		_date.setTime(value);
		__genDate();
	}

	

	_obj.toString = function(format) {
		if(format == null) {
			return _date.toString();
		} else {
			var _str = format;
			_str = _str.replace(/d{6,}/g, "ddddd");
			_str = _str.replace(/M{5,}/g, "MMMM");
			_str = _str.replace(/(^|[^y])y{3}(?!y)/g, "$1yy");
			_str = _str.replace(/y{5,}/g, "yyyy");
			_str = _str.replace(/h{3,}/g, "hh");
			_str = _str.replace(/H{3,}/g, "HH");
			_str = _str.replace(/m{3,}/g, "mm");
			_str = _str.replace(/s{3,}/g, "ss");
			_str = _str.replace(/l{2,}/g, "l");
			_str = _str.replace(/L{2,}/g, "L");
			_str = _str.replace(/t{3,}/g, "tt");
			_str = _str.replace(/T{3,}/g, "TT");
			_str = _str.replace(/Z{2,}/g, "Z");

			_str = _str.replace(/d+|M+|y+|h+|H+|m+|s+|l+|L+|t+|T+|Z+/g, function ($0) {
				console.log($0);
			});
			return null;
		}
	}

	return _obj;
}