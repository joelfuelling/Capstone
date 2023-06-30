import { useState, useRef } from 'react'
import EditCourseForm from './EditCourseForm/EditCourseForm'
import StartDateDisplay from '../Dates/DatesDetailsDisplay/StartDateDisplay'
import EndDateDisplay from '../Dates/DatesDetailsDisplay/EndDateDisplay'
// Dispalying days import below.
import DaysOfWeek from './daysOfWeek/daysOfWeek'

// setCourse is added so that editForm can be passed the "new" course information.
export default function CourseDetail({ course, setCourse, handleDelete }) {
    // editForm starts as false so that 'EDIT' appears first, rather than Close Editor
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    function toggleEditForm() {
        // Setup the toggle of the edit button to change text (ternary below)
        setEditFormIsOpen((prevState) => {
            return !prevState
        })
    }
    return (
        <>
            <div>
                <h3>Course name:  {course.name}</h3>
                <p placeholder="$">Price: ${course.price}</p>
                <StartDateDisplay course={course}></StartDateDisplay>
                <EndDateDisplay course={course}></EndDateDisplay>
                <p>Class Duration: {course.classLength}</p>
                <DaysOfWeek course={course} />
                <p>Supplies Provided?
                    {course.suppliesProvided ?
                        <span> Yes</span>
                        :
                        <span> No</span>
                    }</p>
                Recurring Classes?
                {course.recurring ?
                    <span className="recurring-yes"> Yes </span>
                    :
                    <span className="recurring-no"> No</span>
                }
                <p>Description:</p>
                <p className="description-display">
                    {course.description}</p>
                <button onClick={handleDelete}>DELETE {course.name}</button>
                <button onClick={toggleEditForm}>
                    {editFormIsOpen ? "Close Editor" : "EDIT"}
                </button>
                {editFormIsOpen &&
                    <EditCourseForm course={course} setCourse={setCourse} setEditFormIsOpen={setEditFormIsOpen}></EditCourseForm>
                }

            </div>

        </>
    )
}