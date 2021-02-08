import Day from './Day';

function Week(props) {
  return (
    <tr className='week'>
      {props.week.map((day, index) => <Day day={day} key={index}/>)}
    </tr>
  );
}

export default Week;