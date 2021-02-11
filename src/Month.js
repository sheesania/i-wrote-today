import { useCallback, useEffect, useState } from 'react';
import Week from './Week';

// Functions for getting/setting information about what days you wrote.
// This data is stored by month in local storage in a data structure like this:
// 20211: {"1": true, "4": true}
// for February 2021 with all other days marked false. Only days which are marked true are included in the object.
//
// (It would be more space-efficient to just use 1 or any 1-char truthy value instead of 'true'
// ...but I just can't bring myself to)
function getWroteInfoKey(year, month) {
  return `${year}${month}`;
}
function getWroteInfo(year, month) {
  const monthKey = getWroteInfoKey(year, month);
  const wroteInfo = window.localStorage.getItem(monthKey);
  if (wroteInfo === null) {
    return {};
  } else {
    return JSON.parse(wroteInfo);
  }
}
function setWroteInfo(year, month, wroteInfo) {
  const monthKey = getWroteInfoKey(year, month);
  window.localStorage.setItem(monthKey, JSON.stringify(wroteInfo));
}

// Returns an Array<Date|undefined> representing the days on a monthly calendar.
// Dates represent days in the given month
// undefined represents days in other months that would appear at the beginning/end of the calendar to fill out the week
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

// Combine information about the days you wrote with info about the days in a given calendar month.
function getDayInfo(year, month) {
  const daysOfMonth = getDaysOfMonth(year, month);
  const wroteInfo = getWroteInfo(year, month);

  const currentDay = new Date().toDateString();
  const dayInfo = daysOfMonth.map(day => {
    if (!day) {
      return undefined;
    } else {
      const dayOfMonth = day.getDate();
      return {
        dayOfMonth: dayOfMonth,
        isCurrentDay: currentDay === day.toDateString(),
        wrote: !!wroteInfo[dayOfMonth],
      };
    }
  });

  return dayInfo;
}

// Slice up an array into 7-item chunks (returning an array of arrays)
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
    setDayInfo(getDayInfo(year, month));
  }, [year, month])

  const updateWrote = useCallback((dayOfMonth, wrote) => {
    // Note that wroteInfo is indexed by day of month, while dayInfo will probably contain some extra undefined days at
    // the beginning and end of the month!
    const wroteInfo = getWroteInfo(year, month);
    if (wrote) {
      wroteInfo[dayOfMonth] = true;
    } else {
      delete wroteInfo[dayOfMonth];
    }
    setWroteInfo(year, month, wroteInfo);

    setDayInfo(dayInfo.map(dayInfo => {
      if (dayInfo && dayInfo.dayOfMonth === dayOfMonth) {
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
