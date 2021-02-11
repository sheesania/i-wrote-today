import Day from './Day';

function Week(props) {
  return (
    <tr className='week'>
      {props.week.map((dayInfo, index) => <Day dayInfo={dayInfo} updateWrote={props.updateWrote} key={index}/>)}
    </tr>
  );
}

export default Week;