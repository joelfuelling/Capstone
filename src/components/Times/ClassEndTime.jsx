import {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function EndTime() {
  const [endTime, setEndTime] = useState(null);
  return (
    <div>
      <DatePicker
        selected={endTime}
        onChange={(date) => setEndTime(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="End Time"
        timeFormat="HH:mm"
        dateFormat="hh:mm aa"
      />
    </div>
  );
}