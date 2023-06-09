const Course = require('../../models/course')

module.exports = {
  index,
  create,
  detail,
  deleteCourse,
  updateCourse
  // above is shorthand for 'create: create'
};

async function index(req, res) {
    try {
        //! 1 OF 5 - INDEX.
        //! const courses = await Course.find()
        const userId = req.user._id
        console.log(req.user._id)
        const courses = await Course.find({ user: userId})
        res.status(200).json(courses)
    }catch(err){
        res.status(400).json(err)
    }
}

async function create(req, res) {
    try {
        //! 2 OF 5 - CREATE.
        //! const newCourse = await Course.create(req.body)
        //? 'req.body.user = req.user._id' wasn't there and newly created courses did not have the associated users ._id included, so the index page was not returning the users list.
        req.body.user = req.user._id
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
        //! 3 0F 5 - DETAIL (show)
        //! const course = await Course.findById(req.params.id)
        const course = await Course.findById(req.params.id)
        res.status(200).json(course)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteCourse(req, res) {
    try{
        //! 4 0F 5 - DELETE
        //! const course = await Course.findByIdAndDelete(req.params.id)
        const course = await Course.findByIdAndDelete(req.params.id)
        res.status(200).json({
            data: 'success'
        })
    }catch(err){
        res.status(400).json(err)
    }
}

// {new: true} is required, or else it would return the previoulsy (non-edited) version from the Db.
async function updateCourse(req, res){
    try {
        //! 5 OF 5 - UPDATE
        //! const updatedCourse = awit Course.findByIdAndUpdate(req.params.id, req.body, {new: true})
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, {new: true})
    req.body.user = req.user._id
    res.status(200).json(updatedCourse)
    } catch(err){
        console.log(err)
        res.status(400).json('Bad update request')
    }
}