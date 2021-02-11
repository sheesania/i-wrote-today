function Day(props) {
  const { dayInfo, updateWrote } = props;

  const enabled = !!dayInfo ? 'day-enabled' : 'day-disabled';
  const isCurrentDay = dayInfo && dayInfo.isCurrentDay ? 'current-day' : '';
  const dayOfMonth = dayInfo ? dayInfo.dayOfMonth : '';

  let wroteToday;
  if (!dayInfo) {
    wroteToday = '';
  } else {
    wroteToday = dayInfo.wrote ? 'wrote-today' : 'didnt-write';
  }

  const updateWroteToday = () => {
    if (!dayInfo) {
      return;
    }
    updateWrote(dayOfMonth, !dayInfo.wrote);
  };

  return (
    <td
      onClick={updateWroteToday}
      className={`day ${enabled} ${isCurrentDay} ${wroteToday}`}>
      <span className='day-of-month'>{dayOfMonth}</span>
    </td>
  );
}

export default Day;