import {useRef, useState} from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import { createCourseRequest } from '../../utilities/courses-api'
import CourseStartDate from '../DatePicker/CourseStardDate'
export default function NewCourseForm(){
    const navigate = useNavigate()
    const nameRef = useRef('')
    const descRef = useRef('')
    const recRef = useRef('')
    const supRef = useRef('')
    const startRef = useRef('')
    const endRef = useRef('')
    const lenRef = useRef('')
    const priceRef = useRef('')
    const daysRef = useRef([])
    //! 1 - Update the daysRef reference to hold an array of selected values using useRef([]) instead of useRef(''):
    const [error, setError] = useState('')
    
    async function handleSubmit(e){
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
            startDate: startRef.current.value,
            endDate: endRef.current.value,
            classLength: lenRef.current.value,
            price: priceRef.current.value,
            daysfOfWeek: selectedDays,
            // Array.from(daysRef.current.selectedOptions).map(day => day.value),
        }
        console.log(newCourse)
        // 1 - 'Try' to create a newresopnse from the db with the above newCourse
        try {
            const newCourseResponse = await createCourseRequest(newCourse)
            console.log(newCourseResponse)
            navigate('/courses')
        //catch and set the error if there is one.
        }catch(err){
            setError(err)
        }  
    }   

    return (
        <> 
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" id="name" >Course name: </label>
                <input type="text" ref={nameRef}/>
                <label htmlFor="description" id="description">Description: </label>
                <input type="textarea" ref={descRef} />
                <label htmlFor="recurring" id="recurring" >Recurring? </label>
                <input type="checkbox" ref={recRef}/>
                <label htmlFor="suppliesProvided" >Supplies provided? </label>
                <input type="checkbox"ref={supRef}/>
                <label htmlFor="startDate" >Start date: </label>
                <input type="date" ref={startRef}/>
                <label htmlFor="endDate" >End date: </label>
                <input type="date" ref={endRef}/>
                <label htmlFor="classLength" >Class length: </label>
                <input type="text" ref={lenRef}/>
                <label htmlFor="price" >Price: </label>
                <input type="number" ref={priceRef} placeholder="$"/>
                <label htmlFor="daysOfWeek" >Select Days:</label>
                {/* //! 2 - Modify the select element to allow multiple selections by adding the multiple attribute: */}
                    <select name="daysOfWeek" id="daysOfWeek" ref={daysRef} multiple>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>
                <button>Create Course</button>
                
                { error && <p>{JSON.stringify(error)}</p>}
            </form>
            
        </> 
    )
}