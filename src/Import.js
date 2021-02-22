import { useState } from 'react';

function Import() {
  const [importBoxValue, setImportBoxValue] = useState('');
  const [successErrorMessage, setSuccessErrorMessage] = useState('');

  const handleImport = () => {
    try {
      if (!importBoxValue || importBoxValue.length === 0) {
        setSuccessErrorMessage('The import box is empty.');
      } else {
        const parsedValue = JSON.parse(importBoxValue);
        if (!(typeof parsedValue === 'object' && parsedValue !== null)) {
          throw new SyntaxError();
        }
        const localStorage = window.localStorage;
        localStorage.clear();
        for (const [key, value] of Object.entries(parsedValue)) {
          localStorage.setItem(key, value);
        }
        setSuccessErrorMessage('Success!');
      }
    } catch (syntaxError) {
      setSuccessErrorMessage('There was a problem parsing your file. Are you sure it\'s an iwrotetoday.txt that you exported here?');
    }
  };

  return (
    <div>
      <h2>Import</h2>
        <p>
          To import your data, open up an "iwrotetoday.txt" file that you exported earlier. Paste the contents here and click "Import".
          <span style={{color: '#884340'}}> WARNING:</span> All existing data will be overwritten!
        </p>
        <textarea
          value={importBoxValue}
          onChange={(event) => setImportBoxValue(event.target.value)}>
        </textarea>
        <p className='successErrorMessage'>{successErrorMessage}</p>
        <div className='button-parent'>
          <button className='import-export-button' onClick={handleImport}>Import</button>
        </div>
    </div>
  );
}

export default Import;