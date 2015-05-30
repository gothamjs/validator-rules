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
# Required error
##
Validator.error 'required', 'The :attribute is required' 


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
# Email error
##
Validator.error 'email', 'The :attribute must be a valid email'


Validator.rule 'accepted', (attribute, value, params) ->

  if value is 'yes' or value is 'on' or value is '1'

    return true

  return false

