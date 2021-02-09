import { useEffect, useState } from 'react';

function Day(props) {
  const [wroteToday, setWroteToday] = useState(false);
  const day = props.day;
  const dayInCurrentMonth = typeof day !== 'undefined';
  const localStorageKey = dayInCurrentMonth ? day.toDateString() : undefined;

  useEffect(() => {
    if (!dayInCurrentMonth) {
      return;
    }

    const localStorage = window.localStorage;
    if (localStorage.getItem(localStorageKey) !== null) {
      setWroteToday(true);
    } else {
      setWroteToday(false);
    }
  }, [dayInCurrentMonth, localStorageKey]);

  const updateWroteToday = () => {
    if (!dayInCurrentMonth) {
      return;
    }

    const newWroteToday = !wroteToday;
    const localStorage = window.localStorage;

    if (newWroteToday) {
      localStorage.setItem(localStorageKey, '');
    } else {
      localStorage.removeItem(localStorageKey);
    }

    setWroteToday(newWroteToday);
  };

  const enabled = dayInCurrentMonth ? 'day-enabled' : 'day-disabled';
  const number = dayInCurrentMonth ? day.getDate() : '';

  let wroteTodayClass;
  if (!dayInCurrentMonth) {
    wroteTodayClass = '';
  } else {
    wroteTodayClass = wroteToday ? 'wrote-today' : 'didnt-write';
  }

  return (
    <td
      onClick={updateWroteToday}
      className={`day ${enabled} ${wroteTodayClass}`}>
      <span className='number'>{number}</span>
    </td>
  );
}

export default Day;