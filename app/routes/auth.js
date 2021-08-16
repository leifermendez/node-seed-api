const express = require('express')
const router = express.Router()

const { loginCtrl, registerCtrl } = require('../controlles/auth')

//TODO: Login !
router.post('/login', loginCtrl)


//TODO: Registrar un usuario
router.post('/register', registerCtrl)


module.exports = router