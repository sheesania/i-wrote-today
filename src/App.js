import { useState } from 'react';
import Month from './Month';

function App() {
  const [month] = useState(new Date().getMonth());

  return (
    <div className='app'>
      {/* month pagination buttons go here */}
      <Month month={month}></Month>
    </div>
  );
}

export default App;
