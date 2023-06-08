
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Keep it simple! 1st model setup idea is below.



const CourseSchema = new Schema({
    name: {type: String, required: true},
    recurring: {type: Boolean, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: false},
    // false end_date if it's just a one day class you woulnd't need to enter an end date, but you still can.
    classLength: {type: String, required: false},
    // class_length being 30 minutes, 2 hours, all-day, etc., leave it up to the user I suppose.
    price: {type: Number, required: false},
    description: {type: String, required: true},
    suppliesProvided: {type: Boolean, required: true},
    daysOfWeek: {
        // Setting the 'String' type to an [array of 'String's]
        // By making this [String] instead of just String, you allow daysOfWeek to accept an array of strings representing the days of the week. The enum property ensures that only valid days are accepted
        type: [String],
        enum : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        default: [],
        required: false,      
    },
    // Possible IceBox: show a supplies_needed list(entered by the user when created) if supplies_provided = false
    // suppliesNeeded: {type: String, required: false}
    user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Course', CourseSchema);

