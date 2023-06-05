import {useRef, useState} from 'react'
import {useNavigate, useParams } from 'react-router-dom'

import { createCourseRequest } from '../../utilities/courses-api'
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
    const daysRef = useRef('')
    const [error, setError] = useState('')
    
    async function handleSubmit(e){
        e.preventDefault()
        // Reset the error after submission
        await setError('')
        // Create the newCourse to be added with the current values.
        const newCourse = {
            name: nameRef.current.value,
            description: descRef.current.value,
            recurring: recRef.current.checked,
            suppliesProvided: supRef.current.checked,
            startDate: startRef.current.value,
            endDate: endRef.current.value,
            classLength: lenRef.current.value,
            price: priceRef.current.value,
            dayfOfWeek: daysRef.current.value,
        }
        // 1 - 'Try' to create a newresopnse from the db with the above newCourse
        try {
            const newCourseResponse = await createCourseRequest(newCourse)
            navigate('/courses')
        //catach and set the error if there is one.
        }catch(err){
            setError(err)
        }
    }   
    return (
        <> 
        { error && <p>{JSON.stringify(error)}</p>}
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
                <label htmlFor="price" >Price($): </label>
                <input type="number" ref={priceRef}/>
                <label htmlFor="daysOfWeek" >Select Days:</label>
                    <select name="daysOfWeek" id="daysOfWeek" ref={daysRef}>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>
                <button>Create Course</button>
            </form>
        </> 
    )
}