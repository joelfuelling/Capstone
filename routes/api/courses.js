const express = require('express')
const router = express.Router()
const coursesController = require('../../controllers/api/courses')
const ensureLoggedin = require('../../config/ensureLoggedIn')
const course = require('../../models/course')

// BASE_URL: /api/courses
router.get ('/', coursesController.index)
router.post('/', coursesController.create)
router.get('/:id', coursesController.detail)
router.delete('/:id', coursesController.deleteCourse)
router.put('/:id', coursesController.updateCourse)

module.exports = router