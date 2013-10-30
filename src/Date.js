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

	// first generate output date
	__genDate();

	_obj.toDate = function() {
		return _date;
	}

	_obj.getTime = function() {
		return _date.getTime();
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

	_obj.setYear = function(value) {
		_dateGen.setFullYear(value);
		__oriDate();
		__genDate();
	}

	_obj.setHours = function(value) {
		_dateGen.setHours(value);
		__oriDate();
		__genDate();
	}

	return _obj;
}