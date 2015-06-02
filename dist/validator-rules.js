// Generated by CoffeeScript 1.8.0
(function() {
  Validator.rule('accepted', function(attribute, value, params) {
    if (value === 'yes' || value === 'on' || value === '1') {
      return true;
    }
    return false;
  });

  Validator.rule('alpha', function(attribute, value, params) {
    if (value === void 0 || value === '') {
      return true;
    }
    if (value.match(/^[a-zA-Z]+$/)) {
      return true;
    }
    return false;
  });

  Validator.rule('alpha_dash', function(attribute, value, params) {
    if (value === void 0 || value === '') {
      return true;
    }
    if (value.match(/^[a-zA-Z0-9_-]+$/)) {
      return true;
    }
    return false;
  });

  Validator.rule('alpha_num', function(attribute, value, params) {
    if (value === void 0 || value === '') {
      return true;
    }
    if (value.match(/^[a-zA-Z0-9]+$/)) {
      return true;
    }
    return false;
  });

  Validator.rule('array', function(attribute, value, params) {
    if (_.isArray(value)) {
      return true;
    }
    return false;
  });

  Validator.rule('boolean', function(attribute, value, params) {
    if (_.isBoolean(value)) {
      return true;
    }
    return false;
  });

  Validator.rule('email', function(attribute, value, params) {
    var regexEmail;
    if (value === void 0 || value === null) {
      return true;
    }
    regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(value);
  });

  Validator.rule('length', function(attribute, value, params) {
    if (value === void 0 || value === null) {
      return true;
    }
    value = String(value);
    if (value.length !== parseInt(params[0])) {
      return false;
    }
    return true;
  });

  Validator.rule('number', function(attribute, value, params) {
    if (!_.isNumber(value)) {
      return false;
    }
    return true;
  });

  Validator.rule('required', function(attribute, value, params) {
    var str;
    if (value === void 0 || value === null) {
      return false;
    }
    str = String(value).replace(/\s/g, "");
    if (!(str.length > 0)) {
      return false;
    }
    return true;
  });

  Validator.errors({
    accepted: 'The :attribute must be accepted.',
    alpha: 'The :attribute may only contain letters.',
    alpha_dash: 'The :attribute may only contain letters, numbers, and dashes.',
    alpha_num: 'The :attribute may only contain letters and numbers.',
    array: 'The :attribute must be an array.',
    boolean: 'The :attribute field must be true or false.',
    email: 'The :attribute must be a valid email address.',
    length: 'The attribute must be :value1 characters.',
    number: 'The :attribute must be a number.',
    required: 'The :attribute is required.'
  });

}).call(this);
