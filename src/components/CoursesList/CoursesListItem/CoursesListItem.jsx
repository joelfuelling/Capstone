// {course && <p>{course.name}</p>} in the CoursesListItem component:
// {course && ...}: This is a conditional rendering statement using the logical AND (&&) operator. It checks if the course prop has a truthy value. 
//* If course is truthy, the code following the && will be evaluated. 
//! If course is falsy, the code following the && will be skipped, and nothing will be rendered.

// <p>{course.name}</p>: If the course prop is truthy, this JSX code will be rendered. It renders a <p> element that displays the name property of the course object.

// So, in summary, this line of code {course && <p>{course.name}</p>} checks if the course prop has a value and, if so, renders a <p> element displaying the name property of the course object. It ensures that only if the course prop is provided and has a value, the name of the course will be rendered as a paragraph.
 import {Link} from 'react-router-dom'

export default function CoursesListItem({course}){
    return (
        <>
        {course && <p>
            <Link to={`/courses/${course._id}`}>
                {course.name}
            </Link>
        </p>}
        </>
    )
}