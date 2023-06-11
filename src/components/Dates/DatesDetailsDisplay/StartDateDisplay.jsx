import {parseISO} from 'date-fns'
export default function StartDate({course}) {
    const handleStartDate = () => {
        const date = parseISO(course.startDate)
        const month = date.toLocaleDateString('default', {month: 'short'})
        const day = date.getDate()
        const year = date.getFullYear()
        const newStartDate = `${month}, ${day}, ${year}`
        return newStartDate
    }
    const newStartDate = handleStartDate()
    return (
        <>
            <p className="start-date-form">Start Date: {newStartDate}</p>
        </>
    )
}