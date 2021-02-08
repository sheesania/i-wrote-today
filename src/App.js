import { useState } from 'react';
import Month from './Month';

function App() {
  const now = new Date();
  const [year] = useState(now.getFullYear())
  const [month] = useState(now.getMonth());

  return (
    <div className='app'>
      {/* month pagination buttons go here */}
      <Month year={year} month={month}></Month>
    </div>
  );
}

export default App;
