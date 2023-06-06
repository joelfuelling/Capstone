//! The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. 
//! Child routes inherit all params from their parent routes.
import {useNavigate, useParams} from 'react-router-dom'
import { getCourseRequest } from '../../utilities/courses-api'
import { useState, useEffect } from 'react'
import CourseDetail from '../../components/CourseDetail/CourseDetail'


export default function CourseDetailPage(){
    let {courseId} = useParams()
    const [course, setCourse] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        async function getCourse(){
            const course = await getCourseRequest(courseId)
            // Store the new 'course' in state below, imported up top as well.
            setCourse(course)
            setTimeout(()=> {
                setLoading(false)
            }, 300)

        }
        getCourse()
    }, [])
    return (
        <>
        { loading ? <p>Loading . . . </p> 
        :
        <CourseDetail course={course}></CourseDetail>
        }
        </>
    )
}