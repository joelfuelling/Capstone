import {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function StartTime() {
  const [startTime, setStartTime] = useState(null);
  return (

      <DatePicker
        selected={startTime}
        onChange={(date) => setStartTime(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Start Time"
        timeFormat="HH:mm"
        dateFormat="hh:mm aa"

      />

  );
}