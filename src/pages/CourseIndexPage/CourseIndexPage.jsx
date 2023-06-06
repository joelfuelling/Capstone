import { coursesIndexRequest } from '../../utilities/courses-api'
import {useEffect, useState} from 'react'
import CoursesList from '../../components/CoursesList/CoursesList'
export default function CourseIndexPage() {
    const [courses, setCourses ] = useState([])
    const [loading, setLoading] = useState(true)
    // Again, use Effect itself cannot be asynchronos, so we define a "child" async function inside it, then invoke it
    // useEffect = //* "When this component loads"
    useEffect(() => {
        async function getCourses(){
           const courses = await coursesIndexRequest()
           setCourses(courses)
           setTimeout(() => {
                setLoading(false)
           }, 400)
        }
        getCourses()
    }, []) //! This dependency array stops the cycle of "State updated -> rerender -> useEffect (updating state) -> rerender, etc...
    return (
        <>
        <h1>Courses List</h1>
        { loading ? <p> Loading . . . </p>
        :
        <CoursesList courses={courses}></CoursesList>
        }
        
        </>
    )
}