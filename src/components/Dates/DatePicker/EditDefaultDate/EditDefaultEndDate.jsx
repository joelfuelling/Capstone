import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'


export default function EditDefaultEndDate({ onDateChange, initialDate }) {
  const [date, setDate] = useState(new Date())
  const handleDateChange = (date) => {
    onDateChange(date); // Call the provided callback function with the selected date for the NewCourse/EditCourse forms.
    setDate(date)
  }
  return (
    <>
      <label htmlFor="endDate">End date:</label>
      <DatePicker
        initialDate={initialDate}
        selected={date}
        withPortal
        showMonthDropdown
        onChange={handleDateChange}
        className="crete-round"
      />
    </>
  );
}