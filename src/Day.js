import { useState } from 'react';

function Day(props) {
  const [wroteToday, setWroteToday] = useState(false);

  const dayInCurrentMonth = typeof props.day !== 'undefined';
  const enabled = dayInCurrentMonth ? 'day-enabled' : 'day-disabled';
  const number = dayInCurrentMonth ? props.day.getDate() : '';

  let wroteTodayClass;
  if (!dayInCurrentMonth) {
    wroteTodayClass = '';
  } else {
    wroteTodayClass = wroteToday ? 'wrote-today' : 'didnt-write';
  }

  return (
    <td onClick={() => setWroteToday(!wroteToday)} className={`day ${enabled} ${wroteTodayClass}`}>
      <span className='number'>{number}</span>
    </td>
  );
}

export default Day;