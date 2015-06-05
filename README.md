# In progress

# Validator rules

Validation rules for the validator class.

## Rules
| Rule            | Description                                                                                                    |
|-----------------|----------------------------------------------------------------------------------------------------------------|
| accepted        | The field under validation must be yes, on, or 1. This is useful for validating "Terms of Service" acceptance. |
| alpha           | The field under validation must be entirely alphabetic characters.                                             |
| alpha_dash      | The field under validation may have alpha-numeric characters, as well as dashes and underscores.               |
| alpha_num       | The field under validation must be entirely alpha-numeric characters.                                          |
| array           | The field under validation must be of type array.                                                              |
| boolean         | The field under validation must be a strict boolean.                                                           |
| email           | The field under validation must be an email                                                                    |
| in:value1,value2 | The field under validation must be in the values given                                                       |
| length:size     | The field under validation must be the exact length size given                                                 |
| not_in:value1,value2 | The field under validation must not be in the values given                                                       |
| number          | The field under validation must be of type number                                                              |
| required        | The field under validation is required                                                                         |


## How to compile source files

In the root of the project, execute that :

```
coffee --compile --watch --output dist/ src/
```

## Tests
Test are written with Qunit, just launch with your browser the file ```tests/index.html```
