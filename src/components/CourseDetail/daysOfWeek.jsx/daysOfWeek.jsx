
export default function DaysOfWeek({course}){
    const formattedDays = course.daysOfWeek.toString().replaceAll(',', ', ')
    console.log(formattedDays)


    return(
        <>
        <p>Class Days: {formattedDays}</p>
        </>
    )
}