import {useState, useRef} from 'react'
import {parseISO} from 'date-fns'
import EditCourseForm from './EditCourseForm/EditCourseForm'
import StartDate from '../DatesDisplay/StartDate'
import EndDate from '../DatesDisplay/EndDate'

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
            <h3>Course name:  {course.name}</h3>
            <p placeholder="$">Price: ${course.price}</p>  
            <StartDate course={course}></StartDate>
            <EndDate course={course}></EndDate>
            <p>Duration: {course.classLength}</p>
            <p>Class Days: {course.daysOfWeek}</p>
            <p>Supplies Provided? 
            {course.suppliesProvided ? 
            <span> Yes</span>
            :
            <span> No</span>
            }</p>
            Recurring Classes?
            {course.recurring ? 
            <span> Yes </span>
            :
            <span> No</span>
            }       
            <p>Description: {course.description}</p>
            <hr></hr>
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