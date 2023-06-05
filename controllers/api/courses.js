const Course = require('../../models/course')

module.exports = {
  index,
  create,
  // above is shorthand for 'create: create'
};

async function index(req, res) {
    try {
        //! 1 OF 5 - INDEX.
        //! const courses = await Course.find()
        const courses = await Course.find()
        res.status(200).json(courses)
    }catch(err){
        res.status(400).json(err)
    }
}

async function create(req, res) {
    try {
        //! 2 OF 5 - CREATE.
        //! const newCourse = await Course.create(req.body)
        const newCourse = await Course.create(req.body)
        console.log(newCourse)
        res.status(201).json(newCourse)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function detail(req, res){
    try {
        const course = await Course.findById()
    }catch(err){
        res.status(400).json(err)
    }
}