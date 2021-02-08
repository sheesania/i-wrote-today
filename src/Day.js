function Day(props) {
  const isDayInCurrentMonth = typeof props.day !== 'undefined';
  const enabled = isDayInCurrentMonth ? 'day-enabled' : 'day-disabled';
  const number = isDayInCurrentMonth ? props.day.getDate() : '';

  return (
    <td className={`day ${enabled}`}>
      <span className='number'>{number}</span>
    </td>
  );
}

export default Day;