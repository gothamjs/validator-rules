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
# Required
#
# Check if you have a value
##
Validator.rule 'required', (attribute, value, params) ->

  if value is undefined or value is null
    return false

  str = String(value).replace(/\s/g, "")

  unless str.length > 0
    return false

  return true

##
# Email
#
# Check if a string is a valid email
##
Validator.rule 'email', (attribute, value, params) ->

  if value is undefined or value is null
    return false

  regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return regexEmail.test value



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
  required: 'The :attribute is required'
  email: 'The :attribute must be a valid email'

