import {useState, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import { updateCourseRequest } from '../../../utilities/courses-api'
import EndDatePick from '../../Dates/DatePicker/EndDatePick'
import EditDefaultStartDate from '../../Dates/DatePicker/EditDefaultDate/EditDefaultStartDate'
import EditDefaultEndDate from '../../Dates/DatePicker/EditDefaultDate/EditDefaultEndDate'



export default function EditCourseForm({course, setCourse, setEditFormIsOpen}){
    const [startDate, setStartDate] = useState(course.startDate);
    const [endDate, setEndDate] = useState(course.endDate)
    const navigate = useNavigate()
    const nameRef = useRef(course.name)
    const descRef = useRef(course.desciption)
    const recRef = useRef(course.recurring)
    const supRef = useRef(course.suppliesProvided)
    const lenRef = useRef(course.classLength)
    const priceRef = useRef(course.price)
    const daysRef = useRef(course.daysOfWeek)
    const [error, setError] = useState('')
// Setting displayed date to today by default.
    const today = new Date().toISOString().split('T')[0]
    
    async function handleSubmit(e){
        
        e.preventDefault()
        const selectedDays = Array.from(daysRef.current.options)
        .filter(option => option.selected)
        .map(option => option.value);
        // Reset the error after submission
        await setError('')

        const updatedCourse = {
            name: nameRef.current.value,
            description: descRef.current.value,
            recurring: recRef.current.checked,
            suppliesProvided: supRef.current.checked,
            startDate: startDate,
            endDate: endDate,
            classLength: lenRef.current.value,
            price: priceRef.current.value,
            daysOfWeek: selectedDays,
        }
        console.log(selectedDays)
        try{
            const newCourse = await updateCourseRequest(course._id, updatedCourse)
            // Lifting state up to the app so the stored course can be changed.
            setCourse(newCourse)
            setEditFormIsOpen(false)

        }catch(err){
            setError("Bad Update request")
        }
    }

    return (
        <>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" id="name" >Course name: </label>
                <input className="crete-round" type="text" ref={nameRef} defaultValue={course.name}/>
                <label htmlFor="description" id="description">Description: </label>
                <textarea className="crete-round" type="textarea" rows="5" cols="40" ref={descRef} defaultValue={course.description} />
                <label htmlFor="recurring" >Recurring? </label>
                <div className="check-box">
                    <input type="checkbox" ref={recRef} defaultChecked={course.recurring}/>
                </div>
                <label htmlFor="suppliesProvided" >Supplies provided? </label>
                <div className="check-box">
                <input type="checkbox"ref={supRef} defaultChecked={course.suppliesProvided} className="check-box"/>
                </div>
                <EditDefaultStartDate initialDate={new Date(course.startDate)} onDateChange={setStartDate}></EditDefaultStartDate>
                <EditDefaultEndDate initialDate={new Date(course.endDate)} onDateChange={setEndDate}></EditDefaultEndDate>
                <label htmlFor="classLength" >Class length: </label>
                <input className="crete-round" type="text" ref={lenRef} defaultValue={course.classLength}/>
                <label htmlFor="price" >Price($): </label>
                <input className="crete-round" type="number" ref={priceRef} defaultValue={course.price}/>
                <label htmlFor="daysOfWeek" >Select Days:</label>
                {/* //! 2 - Modify the select element to allow multiple selections by adding the multiple attribute: */}
                    <select className="crete-round" name="daysOfWeek" id="daysOfWeek" ref={daysRef} defaultValue={course.daysOfWeek} multiple>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>
                <button>Edit Course</button>
                { error && <p>{JSON.stringify(error)}</p>}
            </form>
        </div>
            
        </>
    )
}