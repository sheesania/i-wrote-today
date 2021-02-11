import { useCallback, useEffect, useState } from 'react';
import Week from './Week';

function getDaysOfMonth(year, month) {
  const days = [];
  const firstDay = new Date(year, month, 1);

  let currentDay = firstDay;
  while (currentDay.getMonth() === firstDay.getMonth()) {
    days.push(currentDay);
    currentDay = new Date(year, month, currentDay.getDate() + 1);
  }

  let firstSunday = firstDay;
  while (firstSunday.getDay() !== 0) {
    days.unshift(undefined);
    const previousDay = new Date(firstSunday.getFullYear(), firstSunday.getMonth(), firstSunday.getDate() - 1);
    firstSunday = previousDay;
  }

  let lastSaturday = days[days.length - 1];
  while (lastSaturday.getDay() !== 6) {
    days.push(undefined);
    const nextDay = new Date(lastSaturday.getFullYear(), lastSaturday.getMonth(), lastSaturday.getDate() + 1);
    lastSaturday = nextDay;
  }

  return days;
}

function getMonthKey(year, month) {
  return `${year}${month}`;
}

function getMonthInfo(year, month) {
  const monthKey = getMonthKey(year, month);
  const monthInStorage = window.localStorage.getItem(monthKey);
  if (monthInStorage === null) {
    return {};
  } else {
    return JSON.parse(monthInStorage);
  }
}

function setMonthInfo(year, month, monthInfo) {
  const monthKey = getMonthKey(year, month);
  window.localStorage.setItem(monthKey, JSON.stringify(monthInfo));
}

function getDayInfo(year, month, days) {
  const monthInfo = getMonthInfo(year, month);

  const currentDay = new Date().toDateString();
  const dayInfo = days.map(day => {
    if (!day) {
      return undefined;
    } else {
      const number = day.getDate();
      return {
        number: number,
        isCurrentDay: currentDay === day.toDateString(),
        wrote: !!monthInfo[number],
      };
    }
  });

  return dayInfo;
}

function getWeeksFromDays(days) {
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

function Month(props) {
  const { year, month } = props;
  const [dayInfo, setDayInfo] = useState([]);

  useEffect(() => {
    const days = getDaysOfMonth(year, month);
    setDayInfo(getDayInfo(year, month, days));
  }, [year, month])

  const updateWrote = useCallback((number, wrote) => {
    const monthInfo = getMonthInfo(year, month);
    if (wrote) {
      monthInfo[number] = true;
    } else {
      delete monthInfo[number];
    }
    setMonthInfo(year, month, monthInfo);

    setDayInfo(dayInfo.map(dayInfo => {
      if (dayInfo && dayInfo.number === number) {
        return { ...dayInfo, wrote: wrote };
      } else {
        return dayInfo;
      }
    }));
  }, [year, month, dayInfo, setDayInfo]);

  const weeks = getWeeksFromDays(dayInfo);

  return (
    <div className='month'>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, index) => <Week week={week} updateWrote={updateWrote} key={index}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default Month;
