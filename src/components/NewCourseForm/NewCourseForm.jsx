import { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createCourseRequest } from '../../utilities/courses-api'
import StartDatePick from '../Dates/DatePicker/StartDatePick'
import EndDatePick from '../Dates/DatePicker/EndDatePick'
export default function NewCourseForm() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const navigate = useNavigate()
    const nameRef = useRef('')
    const descRef = useRef('')
    const recRef = useRef('')
    const supRef = useRef('')
    const lenRef = useRef('')
    const priceRef = useRef('')
    const daysRef = useRef([])
    //! 1 - Update the daysRef reference to hold an array of selected values using useRef([]) instead of useRef(''):
    const [error, setError] = useState('')
    // Setting displayed date to today by default.


    async function handleSubmit(e) {
        e.preventDefault()


        //? Array.from() is a method that creates a new Array instance from an array-like or iterable object. In this case, it is used to convert the options property of daysRef.current (which is a list of <option> elements) into a regular array.
        const selectedDays = Array.from(daysRef.current.options)
            .filter(option => option.selected)
            .map(option => option.value);
        console.log(selectedDays)
        // Reset the error after submission
        await setError('')
        // Create the newCourse to be added with the current selected values.
        const newCourse = {
            name: nameRef.current.value,
            description: descRef.current.value,
            recurring: recRef.current.checked,
            suppliesProvided: supRef.current.checked,
            startDate: startDate,
            endDate: endDate,
            classLength: lenRef.current.value,
            price: priceRef.current.value,
            daysOfWeek: selectedDays,
            // Array.from(daysRef.current.selectedOptions).map(day => day.value),
        }
        // 1 - 'Try' to create a newresopnse from the db with the above newCourse
        try {
            const newCourseResponse = await createCourseRequest(newCourse)
            navigate('/courses')
            //catch and set the error if there is one.
        } catch (err) {
            setError(`ERROR: Please fill out all fields`)
        }
    }

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" id="name" >Course name: </label>
                    <input className="crete-round" type="text" ref={nameRef} />
                    <label htmlFor="description" id="description">Description: </label>
                    <textarea className="crete-round" type="textarea" rows="5" cols="40" ref={descRef} />
                    <label htmlFor="recurring">Recurring? </label>
                    <div className="check-box">
                        <input type="checkbox" ref={recRef} id="recurring" />
                    </div>
                    <label htmlFor="suppliesProvided">Supplies provided? </label>
                    <div className="check-box">
                        <input type="checkbox" ref={supRef} id="supplies-provided" />
                    </div>
                    <StartDatePick onDateChange={setStartDate} />
                    <EndDatePick onDateChange={setEndDate} />
                    <label htmlFor="classLength" >Class length: </label>
                    <input className="crete-round" type="text" ref={lenRef} />
                    <label htmlFor="price" >Price: </label>
                    <input className="crete-round" type="number" ref={priceRef} placeholder="$" />
                    <label htmlFor="daysOfWeek" >Select Days:</label>
                    {/* //! 2 - Modify the select element to allow multiple selections by adding the multiple attribute: */}
                    <select className="crete-round days-of-week" name="daysOfWeek" id="daysOfWeek" ref={daysRef} multiple>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>
                    <button className='create-and-edit-button'>Create Course</button>
                </form>
                {error && <p className="error">{JSON.stringify(error)}</p>}
            </div>

        </>
    )
}