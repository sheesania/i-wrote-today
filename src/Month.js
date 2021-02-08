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

function getWeeksFromDays(days) {
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

function Month(props) {
  const days = getDaysOfMonth(props.year, props.month);
  const weeks = getWeeksFromDays(days);

  return (
    <div className='month'>
      {weeks.map((week, index) => <Week week={week} key={index}/>)}
    </div>
  );
}

export default Month;
