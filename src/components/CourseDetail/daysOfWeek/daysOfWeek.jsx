
export default function DaysOfWeek({course}){
    const formattedDays = course.daysOfWeek.toString().replaceAll(',', ', ')
    return(
        <>
        <p>Class Days: {formattedDays}</p>
        </>
    )
}