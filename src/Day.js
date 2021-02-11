function Day(props) {
  const { dayInfo, updateWrote } = props;

  const enabled = !!dayInfo ? 'day-enabled' : 'day-disabled';
  const currentDay = dayInfo && dayInfo.isCurrentDay ? 'current-day' : '';
  const number = dayInfo ? dayInfo.number : '';

  let wroteTodayClass;
  if (!dayInfo) {
    wroteTodayClass = '';
  } else {
    wroteTodayClass = dayInfo.wrote ? 'wrote-today' : 'didnt-write';
  }

  const updateWroteToday = () => {
    if (!dayInfo) {
      return;
    }
    updateWrote(number, !dayInfo.wrote);
  };

  return (
    <td
      onClick={updateWroteToday}
      className={`day ${enabled} ${wroteTodayClass} ${currentDay}`}>
      <span className='number'>{number}</span>
    </td>
  );
}

export default Day;