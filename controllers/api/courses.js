const Course = require('../../models/course')

module.exports = {
  index,
//   create,
  // above is shorthand for 'create: create'
};

async function index(req, res) {
    try {
        const courses = await Course.find()
        res.status(200).json(courses)
    }catch(err){
        res.status(400).json(err)
    }
}
