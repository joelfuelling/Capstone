import {useState, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import { updateCourseRequest } from '../../../utilities/courses-api'

export default function EditCourseForm({course, setCourse, setEditFormIsOpen}){
    const navigate = useNavigate()
    const nameRef = useRef(course.name)
    const descRef = useRef(course.desciption)
    const recRef = useRef(course.recurring)
    const supRef = useRef(course.suppliesProvided)
    const startRef = useRef(course.startDate)
    const endRef = useRef(course.endDate)
    const lenRef = useRef(course.classLength)
    const priceRef = useRef(course.price)
    const daysRef = useRef(course.daysOfWeek)
    const [error, setError] = useState('')
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
            startDate: startRef.current.value,
            endDate: endRef.current.value,
            classLength: lenRef.current.value,
            price: priceRef.current.value,
            daysfOfWeek: selectedDays,
        }
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
        <form onSubmit={handleSubmit}>
                <label htmlFor="name" id="name" >Course name: </label>
                <input type="text" ref={nameRef} defaultValue={course.name}/>
                <label htmlFor="description" id="description">Description: </label>
                <input type="textarea" ref={descRef} defaultValue={course.description} />
                <label htmlFor="recurring" id="recurring" >Recurring? </label>
                <input type="checkbox" ref={recRef} defaultChecked={course.recurring}/>
                <label htmlFor="suppliesProvided" >Supplies provided? </label>
                <input type="checkbox"ref={supRef} defaultChecked={course.suppliesProvided}/>
                <label htmlFor="startDate" >Start date: </label>
                <input type="date" ref={startRef} defaultValue={course.startDate}/>
                <label htmlFor="endDate" >End date: </label>
                <input type="date" ref={endRef} defaultValue={course.endDate}/>
                <label htmlFor="classLength" >Class length: </label>
                <input type="text" ref={lenRef} defaultValue={course.classLength}/>
                <label htmlFor="price" >Price($): </label>
                <input type="number" ref={priceRef} defaultValue={course.price}/>
                <label htmlFor="daysOfWeek" >Select Days:</label>
                {/* //! 2 - Modify the select element to allow multiple selections by adding the multiple attribute: */}
                    <select name="daysOfWeek" id="daysOfWeek" ref={daysRef} defaultValue={course.daysOfWeek} multiple>
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
        </>
    )
}