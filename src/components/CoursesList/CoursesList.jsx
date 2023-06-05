import CoursesListItem from "./CoursesListItem/CoursesListItem"
export default function CoursesList({courses}){
    //! This "works", but there's no array to return yet.
    // const courseProp = courses.map(course => 
    // <CoursesListItem course={course} key={course._id}>
    // </CoursesListItem>)
    return (
        <>
            <p>The map "works", but there's no array to return yet.</p>
            {/* {courseProp} */}
        </>
    )
}