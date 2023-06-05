//! The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. 
//! Child routes inherit all params from their parent routes.
import {useNavigate, useParams} from 'react-router-dom'

export default function CourseDetailPage(){
    return (
        <>
            <p>Here's a movie</p>
        </>
    )
}