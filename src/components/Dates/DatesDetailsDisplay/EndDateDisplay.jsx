import {parseISO} from 'date-fns'
export default function EndDateDisplay({course}) {
        const date = parseISO(course.endDate)
        const month = date.toLocaleDateString('default', {month: 'short'})
        const day = date.getDate()
        const year = date.getFullYear()
        const newEndDate = `${month}, ${day}, ${year}`
    return (
        <>
            <p>End Date: {newEndDate}</p>
        </>
    )
}