import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState} from 'react'

export default function EndDatePick({onDateChange}){
    const [date, setDate] = useState(new Date())
    
    const handleDateChange = (date) => {
        setDate(date);
        onDateChange(date); // Call the provided callback function with the selected date
      }
      return (
        <>
          <label htmlFor="endDate">End date:</label>
          <DatePicker
            withPortal
            minDate={new Date()}
            selected={date}
            onChange={handleDateChange}
          />
        </>
      );
    }