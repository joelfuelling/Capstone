const express = require('express')
const router = express.Router()
const coursesController = require('../../controllers/api/courses')
const ensureLoggedin = require('../../config/ensureLoggedIn')

// BASE_URL: /api/courses
router.get ('/', coursesController.index)
router.post('/', coursesController.create)
router.get('/:id', coursesController.detail)


module.exports = router