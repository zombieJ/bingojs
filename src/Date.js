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

	_obj.getTimezoneOffset = function() {
		return _offset;
	}

	_obj.getTimezone = function() {
		var _tz = _obj.toUTCString().match(/[A-Z]+$/);
		var _os = _obj.getTimezoneOffset() / 36000;
		if(_os < 0) {
			return _tz + "+" + __fillZero(-_os + "", 4);
		} else {
			return _tz + "-" + __fillZero(_os + "", 4);
		}
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

	_obj.getDay = function() {
		return _dateGen.getDay();
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

	_obj.toUTCString = function() {
		return _dateGen.toUTCString();
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

			_str = _str.replace(/d+|M+|y+|h+|H+|m+|s+|l+|L+|t+|T+|Z+/g, function ($0) {
				switch($0) {
				case "d":
					return _obj.getDate();
				case "dd":
					return __fillZero(_obj.getDate());
				case "ddd":
					return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][_obj.getDay()];
				case "dddd":
					return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][_obj.getDay()];
				case "M":
					return _obj.getMonth() + 1;
				case "MM":
					return __fillZero(_obj.getMonth() + 1);
				case "MMM":
					return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][_obj.getMonth()];
				case "MMMM":
					return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][_obj.getMonth()];
				case "yy":
					return String(_obj.getYear()).substr(2);
				case "yyyy":
					return _obj.getYear();
				case "h":
					return _obj.getHours() % 12 || 12;
				case "hh":
					return __fillZero(_obj.getHours() % 12 || 12);
				case "H":
					return _obj.getHours();
				case "HH":
					return __fillZero(_obj.getHours());
				case "m":
					return _obj.getMinutes();
				case "mm":
					return __fillZero(_obj.getMinutes());
				case "s":
					return _obj.getSeconds();
				case "ss":
					return __fillZero(_obj.getSeconds());
				case "l":
					return __fillZero(_obj.getMilliseconds(), 3);
				case "L":
					var m = _obj.getMilliseconds();
					if (m > 99) m = Math.round(m / 10);
					return __fillZero(m);
				case "tt":
					return _obj.getHours() < 12 ? 'am' : 'pm';
				case "TT":
					return _obj.getHours() < 12 ? 'AM' : 'PM';
				case "Z":
					return _obj.getTimezone();
				default:
					return $0;
				}
			});
			return _str;
		}
	}

	return _obj;
}