import Day from './Day';

function Week(props) {
  return (
    <div className='week'>
      {props.week.map((day, index) => <Day day={day} key={index}/>)}
    </div>
  );
}

export default Week;