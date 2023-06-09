import {parseISO} from 'date-fns'
export default function EndDate({course}) {
    const handleEndDate = () => {
        const date = parseISO(course.endDate)
        const month = date.toLocaleDateString('default', {month: 'short'})
        const day = date.getDate()
        const year = date.getFullYear()
        const newEndDate = `${month}, ${day}, ${year}`
        console.log(newEndDate)
        return newEndDate
    }
    const newEndDate = handleEndDate()
    return (
        <>
            <p>End Date: {newEndDate}</p>
            {console.log(newEndDate)}
        </>
    )
}