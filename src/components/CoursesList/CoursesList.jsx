import CoursesListItem from "./CoursesListItem/CoursesListItem"
export default function CoursesList({courses}){
    return (
        <>
            {courses.map(course => <CoursesListItem key={course._id} course={course}></CoursesListItem>)}
        </>
    )
}