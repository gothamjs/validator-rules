
module('Accepted rule');

test('Must pass with "yes"', 1, function() {

  datas = {
    "terms": "yes"
  };

  rules = {
    "terms": "accepted"
  };

  validation = new Validator();
  validation.make(datas, rules);

  deepEqual(validation.passes(), true);


});

test('Must pass with "yes"', 1, function() {

  datas = {
    "terms": "yes"
  };

  rules = {
    "terms": "accepted"
  };

  validation = new Validator();
  validation.make(datas, rules);

  deepEqual(validation.passes(), true);


});

test('Must pass with "on"', 1, function() {

  datas = {
    "terms": "on"
  };

  rules = {
    "terms": "accepted"
  };

  validation = new Validator();
  validation.make(datas, rules);

  deepEqual(validation.passes(), true);


});

test('Must pass with "1" string', 1, function() {

  datas = {
    "terms": "1"
  };

  rules = {
    "terms": "accepted"
  };

  validation = new Validator();
  validation.make(datas, rules);

  deepEqual(validation.passes(), true);


});

test('Must fails with "1" integer', 1, function() {

  datas = {
    "terms": 1
  };

  rules = {
    "terms": "accepted"
  };

  validation = new Validator();
  validation.make(datas, rules);

  deepEqual(validation.passes(), false);


});

module('Alpha rule');


test('Must pass with "goTHam', 1, function() {

  datas = {
    "name": "goTHam"
  };

  rules = {
    "name": "alpha"
  };

  validation = new Validator();

  validation.make(datas, rules);

  deepEqual(validation.passes(), true);

}); 

test('Must fail with "1gotHAM"', 1, function() {

    datas = {
    "name": "1goTHam"
  };

  rules = {
    "name": "alpha"
  };

  validation = new Validator();

  validation.make(datas, rules);

  deepEqual(validation.passes(), false);

});

test('Must fail with " gotHAM " (with spaces)', 1, function() {

    datas = {
    "name": " goTHam "
  };

  rules = {
    "name": "alpha"
  };

  validation = new Validator();

  validation.make(datas, rules);

  deepEqual(validation.passes(), false);

});

module('AlphaDash rule');

test('Must pass with "batman_and-joker"', 1, function() {

  datas = {
    "name": "batman_and-joker"
  };

  rules = {
    "name": "alpha_dash"
  };

  validation = new Validator();

  validation.make(datas, rules);

  deepEqual(validation.passes(), true);

});

test('Must fail with " batman_and-joker " (with spaces)', 1, function() {

  datas = {
    "name": " batman_and-joker "
  };

  rules = {
    "name": "alpha_dash"
  };

  validation = new Validator();

  validation.make(datas, rules);

  deepEqual(validation.passes(), false);

});

module('AlphaNum rule');

test('Must fail with "837kdkd-_"', 1, function() {

  datas = {
    "name": "837kdkd-_"
  };

  rules = {
    "name": "alpha_num"
  };

  validation = new Validator();

  validation.make(datas, rules);

  deepEqual(validation.passes(), false);


});


test('Must pass with "newYork4"', 1, function() {

  datas = {
    "name": "newYork4"
  };

  rules = {
    "name": "alpha_num"
  };

  validation = new Validator();

  validation.make(datas, rules);

  deepEqual(validation.passes(), true);


});

module('Array rule');

test('Must fail with string', 1, function() {

  datas = {
    "name": "string"
  };

  rules = {
    "name": "array"
  };

  validation = new Validator();

  validation.make(datas, rules);

  deepEqual(validation.passes(), false);


});

test('Must pass with array', 1, function() {

  datas = {
    "name": ["batman", "joker"]
  };

  rules = {
    "name": "array"
  };

  validation = new Validator();

  validation.make(datas, rules);

  deepEqual(validation.passes(), true);


});


test('Must fail with integer', 1, function() {

  datas = {
    "name": 5
  };

  rules = {
    "name": "array"
  };

  validation = new Validator();

  validation.make(datas, rules);

  deepEqual(validation.passes(), false);


});


test('Must fail with object', 1, function() {

  datas = {
    "name": {name: "joker"}
  };

  rules = {
    "name": "array"
  };

  validation = new Validator();

  validation.make(datas, rules);

  deepEqual(validation.passes(), false);


});


/*
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

test('Must display the error', 1, function() {

  datas = {
    "name": ""
  };

  rules = {
    "name": "required"
  };

  validation = new Validator();

  validation.make(datas, rules);

  deepEqual(validation.errors.first('name'), 'The name is required');


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

module('Accepted rule');

test('Must pass with "yes"', 1, function() {

  datas = {
    "terms": "yes"
  };

  rules = {
    "terms": "accepted"
  };

  validation = new Validator();
  validation.make(datas, rules);

  deepEqual(validation.passes(), true);


});

test('Must pass with "yes"', 1, function() {

  datas = {
    "terms": "yes"
  };

  rules = {
    "terms": "accepted"
  };

  validation = new Validator();
  validation.make(datas, rules);

  deepEqual(validation.passes(), true);


});

test('Must pass with "on"', 1, function() {

  datas = {
    "terms": "on"
  };

  rules = {
    "terms": "accepted"
  };

  validation = new Validator();
  validation.make(datas, rules);

  deepEqual(validation.passes(), true);


});

test('Must pass with "1" string', 1, function() {

  datas = {
    "terms": "1"
  };

  rules = {
    "terms": "accepted"
  };

  validation = new Validator();
  validation.make(datas, rules);

  deepEqual(validation.passes(), true);


});

test('Must fails with "1" integer', 1, function() {

  datas = {
    "terms": 1
  };

  rules = {
    "terms": "accepted"
  };

  validation = new Validator();
  validation.make(datas, rules);

  deepEqual(validation.passes(), false);


});
*/






