function Day(props) {
  const output = typeof props.day === 'undefined' ? '-' : props.day.getDate();

  return (
    <div className='day'>
      {output}
    </div>
  );
}

export default Day;