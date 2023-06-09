import {useState, useRef} from 'react'
import {parseISO} from 'date-fns'
import EditCourseForm from './EditCourseForm/EditCourseForm'

// setCourse is added so that editForm can be passed the "new" course information.
export default function CourseDetail({course, setCourse, handleDelete}){
    const handleStartDate = () => {
        const date = parseISO(course.startDate)
        const month = date.toLocaleDateString('default', {month: 'short'})
        const day = date.getDate()
        const year = date.getFullYear()
        const newStartDate = `${month}, ${day}, ${year}`
        console.log(newStartDate)
        return newStartDate
    }
    const newStartDate = handleStartDate()

    const handleEndDate = () => {
        const date = parseISO(course.endDate)
        const month = date.toLocaleDateString('default', {month: 'short'})
        const day = date.getDate()
        const year = date.getFullYear()
        const newEndDate = `${month}, ${day}, ${year}`
        console.log(newEndDate)
        return newEndDate
    }
    const newEndDate = handleEndDate()

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
            <p>Start Date: {newStartDate}</p>
            <p>End Date: {newEndDate}</p>
            <p>Duration: {course.classLength}</p>
            <p>Class Days: {course.daysOfWeek}</p>
            {course.suppliesProvided && <p>Supplies Provided</p>}
            {course.recurring && <p>Recurring Classes</p>}
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