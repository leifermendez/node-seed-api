const { check } = require('express-validator') //TODO <---
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [ //TODO:name, age, email
    check('name')
        .exists()
        .not()
        .isLength({ min: 5 })
        .isEmpty(),
    check('age')
        .exists()
        .isNumeric()
        .custom((value, { req }) => {
            //TODO: 18
            if (value < 18 || value > 40) {
                throw new Error('Rango de edad debe ser entre 18 y 40')
            }
            return true
        })
    ,
    check('email')
        .exists()
        .isEmail(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }