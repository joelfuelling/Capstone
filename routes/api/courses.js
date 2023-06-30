const express = require('express')
const router = express.Router()
const coursesController = require('../../controllers/api/courses')
const ensureLoggedin = require('../../config/ensureLoggedIn')
const course = require('../../models/course')

// BASE_URL: /api/courses
router.get ('/', ensureLoggedin, coursesController.index)
router.post('/', ensureLoggedin, coursesController.create)
router.get('/:id', coursesController.detail)
router.delete('/:id', ensureLoggedin, coursesController.deleteCourse)
router.put('/:id', ensureLoggedin, coursesController.updateCourse)

module.exports = router