
export default function CoursesListItem({course}){
    return (
        <>
        {course && <p>{course.name}</p>}
            <p>{JSON.stringify(course)}</p>
        </>
    )
}