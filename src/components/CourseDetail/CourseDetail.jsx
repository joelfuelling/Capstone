import {useState} from 'react'
import EditCourseForm from './EditCourseForm/EditCourseForm'
import CourseStartDate from '../DatePicker/CourseStardDate'

// setCourse is added so that editForm can be passed the "new" course information.
export default function CourseDetail({course, setCourse, handleDelete}){
    // editForm starts as false so that 'EDIT' appears first, rather than Close Editor
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    function toggleEditForm(){
        // Setup the toggle of the edit button to change text (ternary below)
        setEditFormIsOpen((prevState)=> {
            return !prevState
        })
    }
    return (
        <>
        <div>
            <h3>Course: {course.name}</h3>
            <p>Price: ${course.price}</p>  
            <p>Start Date: {course.startDate}</p>
            <p>End Date: {course.endDate}</p>
            <p>Duration: {course.classLength}</p>
            <p>Class Days: {course.daysOfWeek}</p>
            {course.suppliesProvided && <p>Supplies Provided</p>}
            {course.recurring && <p>Recurring Classes</p>}
            <p>Description: {course.description}</p>
            <button onClick={handleDelete}>DELETE {course.name}</button>
            <button onClick={toggleEditForm}>
            {editFormIsOpen ? "Close Editor" : "EDIT"}
            </button>
            { editFormIsOpen && 
                <EditCourseForm course={course} setCourse={setCourse} setEditFormIsOpen={setEditFormIsOpen}></EditCourseForm>
            }

        </div>
        
        </>
    )
}