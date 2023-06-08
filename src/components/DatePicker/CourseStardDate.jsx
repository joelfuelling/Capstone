import {parseISO} from 'date-fns'
import {useRef} from 'react'


export default function CourseStartDate({course}){
    const startRef = useRef('')
    const handleStartDate = () => {
        const date = parseISO(course.startDate)
        const month = date.toLocaleDateString('default', {month: 'short'})
        const day = date.getDate()
        const year = date.getFullYear()
        const newStartDate = `${month}, ${day},${year}`
        console.log(newStartDate)
        return formattedStartDate
    }
    const formattedStartDate = handleStartDate()
    return(
        <>
        <label htmlFor="startDate" >Start date: {formattedStartDate}</label>
        <input type="date" ref={startRef}/>
        </>
    )
}