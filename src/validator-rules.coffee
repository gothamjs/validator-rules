##
# Accepted
#
# The field under validation must be yes, on, or 1. This is useful for validating "Terms of Service" acceptance.
##
Validator.rule 'accepted', (attribute, value, params) ->

  if value is 'yes' or value is 'on' or value is '1'

    return true

  return false

##
# Alpha
#
# The field under validation must be entirely alphabetic characters.
##
Validator.rule 'alpha', (attribute, value, params) ->

  if value is undefined or value is ''
    return true

  if value.match(/^[a-zA-Z]+$/)
    return true

  return false

##
# Alpha Dash
#
# The field under validation may have alpha-numeric characters, as well as dashes and underscores.
##
Validator.rule 'alpha_dash', (attribute, value, params) ->

  if value is undefined or value is ''
    return true

  if value.match(/^[a-zA-Z0-9_-]+$/)
    return true

  return false

##
# Alpha Num
#
# The field under validation must be entirely alpha-numeric characters.
##
Validator.rule 'alpha_num', (attribute, value, params) ->

  if value is undefined or value is ''
    return true

  if value.match(/^[a-zA-Z0-9]+$/)
    return true

  return false


##
# Array
#
# The field under validation must be of type array.
##
Validator.rule 'array', (attribute, value, params) ->

  if _.isArray(value)

    return true

  return false

##
# Boolean
#
# The field under validation must be of type boolean.
##
Validator.rule 'boolean', (attribute, value, params) ->

  if _.isBoolean(value)
    return true

  return false

##
# Email
#
# Check if a string is a valid email
##
Validator.rule 'email', (attribute, value, params) ->

  if value is undefined or value is null
    return true

  regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return regexEmail.test value

##
# In
#
# The field under validation must be in the values given
##
Validator.rule 'in', (attribute, value, params) ->

  if value is undefined or value is null
    return true

  if _.includes(params, value)
    return true

  return false

##
# Length
#
# The field under validation must be the exact length given
##
Validator.rule 'length', (attribute, value, params) ->

  if value is undefined or value is null
    return true

  value = String(value)

  unless value.length is parseInt(params[0])
    return false

  return true

##
# Number
#
# The field under validation must be of type number
##
Validator.rule 'number', (attribute, value, params) ->

  unless _.isNumber(value)
    return false

  return true

##
# Required
#
# The field under validation is required
##
Validator.rule 'required', (attribute, value, params) ->

  if value is undefined or value is null
    return false

  str = String(value).replace(/\s/g, "")

  unless str.length > 0
    return false

  return true


##
# Errors
#
##
Validator.errors
  accepted: 'The :attribute must be accepted.'
  alpha: 'The :attribute may only contain letters.'
  alpha_dash: 'The :attribute may only contain letters, numbers, and dashes.'
  alpha_num: 'The :attribute may only contain letters and numbers.'
  array: 'The :attribute must be an array.'
  boolean: 'The :attribute field must be true or false.'
  email: 'The :attribute must be a valid email address.'
  in: 'The :attribute is invalid.'
  length: 'The attribute must be :value1 characters.'
  number: 'The :attribute must be a number.'
  required: 'The :attribute is required.'
