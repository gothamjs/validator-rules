module('Required rule');

test('Must fail if string ""', 1, function() {

  datas = {
    "name": ""
  };

  rules = {
    "name": "required"
  };

  validation = new Validator();

  validation.make(datas, rules);

  deepEqual(validation.passes(), false);

}); 

module('Email rule');

test('Must fail with "batman"', 1, function() {

  datas = {
    "name": "batman"
  };

  rules = {
    "name": "email"
  };

  validation = new Validator();
  validation.make(datas, rules);

  deepEqual(validation.passes(), false);

});

test('Must success with "batman@github.io"', 1, function() {

  datas = {
    "name": "batman@github.io"
  };

  rules = {
    "name": "email"
  };

  validation = new Validator();
  validation.make(datas, rules);

  deepEqual(validation.passes(), true);

});

test('Must fail with "batman@github"', 1, function() {

  datas = {
    "name": "batman@github"
  };

  rules = {
    "name": "email"
  };

  validation = new Validator();
  validation.make(datas, rules);

  deepEqual(validation.passes(), false);

});