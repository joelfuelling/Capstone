import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'

export default function StartDatePick({ onDateChange }) {
  const [date, setDate] = useState(new Date())
  const handleDateChange = (date) => {
    setDate(date);
    onDateChange(date); // Call the provided callback function with the selected date for the NewCourse/EditCourse forms.
  }
  return (
    <>
      <label htmlFor="startDate">Start date:</label>
      <DatePicker
        showMonthDropdown
        selected={date}
        withPortal
        onChange={handleDateChange}
        className="crete-round"
      />
    </>
  );
}