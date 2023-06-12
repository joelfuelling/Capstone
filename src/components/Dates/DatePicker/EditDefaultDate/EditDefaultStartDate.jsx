import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


export default function EditDefaultStartDate({onDateChange, initialDate}){
    const handleDateChange = (date) => {
        onDateChange(date); // Call the provided callback function with the selected date for the NewCourse/EditCourse forms.
      }
      return (
        <>
          <label htmlFor="startDate">Start date:</label>
          <DatePicker
            minDate={new Date()}
            selected={initialDate}
            withPortal
            onChange={handleDateChange}
            className="crete-round"
          />
        </>
      );
    }