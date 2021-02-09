import { useState } from 'react';
import Month from './Month';
import './App.css';

function getPreviousMonth(year, month) {
  const previousMonth = new Date(year, month - 1);
  return [previousMonth.getFullYear(), previousMonth.getMonth()];
}

function getNextMonth(year, month) {
  const nextMonth = new Date(year, month + 1);
  return [nextMonth.getFullYear(), nextMonth.getMonth()];
}

function App() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth());

  const goToPreviousMonth = () => {
    const [newYear, newMonth] = getPreviousMonth(year, month);
    setYear(newYear);
    setMonth(newMonth);
  };

  const goToNextMonth = () => {
    const [newYear, newMonth] = getNextMonth(year, month);
    setYear(newYear);
    setMonth(newMonth);
  };

  return (
    <div className='app'>
      <div className='app-header'>
        <h1>{new Date(year, month).toLocaleDateString('default', { month: 'long', year: 'numeric' })}</h1>
        <div className='month-buttons'>
          <span className='month-button' onClick={goToPreviousMonth}>←</span>
          <span className='month-button' onClick={goToNextMonth}>→</span>
        </div>
      </div>
      <Month year={year} month={month}></Month>
    </div>
  );
}

export default App;
