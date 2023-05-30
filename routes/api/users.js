const express = require('express')
const router = express.Router()
const usersController = require('../../controllers/api/users')
const ensureLoggedin = require('../../config/ensureLoggedIn')

// BASE_URL: /api/users
router.post('/', usersController.create)
router.post('/login', usersController.login)
router.get('/check-token', ensureLoggedin, usersController.checkToken)

module.exports = router