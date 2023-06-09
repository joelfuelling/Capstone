import {parseISO} from 'date-fns'
export default function StartDate({course}) {
    const handleStartDate = () => {
        const date = parseISO(course.startDate)
        const month = date.toLocaleDateString('default', {month: 'short'})
        const day = date.getDate()
        const year = date.getFullYear()
        const newStartDate = `${month}, ${day}, ${year}`
        console.log(newStartDate)
        return newStartDate
    }
    const newStartDate = handleStartDate()
    return (
        <>
            <p>Start Date: {newStartDate}</p>
            {console.log(newStartDate)}
        </>
    )
}