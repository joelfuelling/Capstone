

export default function CourseDetail({course}){
    return (
        <>
        <div>
            <h3>Course: {course.name}</h3>
            <p>Price: ${course.price}</p>  
            <p>Start Date: {course.startDate}</p>
            <p>End Date: {course.endDate}</p>
            <p>Duration: {course.classLength}</p>
            <p>Class Days: {course.daysOfWeek}</p>
            {course.suppliesProvided && <p>Supplies Provided</p>}
            {course.recurring && <p>Recurring Classes</p>}
            <p>Description: {course.description}</p>
            

            
        </div>
        
        </>
    )
}