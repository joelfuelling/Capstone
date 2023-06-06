//! The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. 
//! Child routes inherit all params from their parent routes.
import {useNavigate, useParams} from 'react-router-dom'
import { getCourseRequest, deleteCourseRequest } from '../../utilities/courses-api'
import { useState, useEffect } from 'react'
import CourseDetail from '../../components/CourseDetail/CourseDetail'


export default function CourseDetailPage(){
    //! let { courseId }: This line uses object destructuring syntax to extract the courseId property from the object returned by the useParams() hook.
    let {courseId} = useParams()
    const [course, setCourse] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(() =>{
        async function getCourse(){
            const course = await getCourseRequest(courseId)
            // Store the new 'course' in state below, imported up top as well.
            if(course){
                setCourse(course)
                setTimeout(()=> {
                    setLoading(false)
                }, 300)     
            }else{
                setError('No Course Found')
                setLoading(false)
            }              
        }
        getCourse()
    }, [])

    async function handleDelete(e){
        const deleteResponse = await deleteCourseRequest(course._id)
        if (deleteResponse.data === 'success'){
            navigate('/courses')
        }
    }

    return (
        <>
        { loading ? <p>Loading . . . </p> 
        :
        error ? <p>{error}</p> 
        :
        <CourseDetail course={course} setCourse={setCourse} handleDelete={handleDelete}></CourseDetail>
        }
        </>
    )
}