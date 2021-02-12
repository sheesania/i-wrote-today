import { useState } from 'react';
import './ImportExport.css';

function ImportExport() {
  const [importBoxValue, setImportBoxValue] = useState('');
  const [successErrorMessage, setSuccessErrorMessage] = useState('');

  const handleImport = () => {
    try {
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
    } catch (syntaxError) {
      setSuccessErrorMessage('There was a problem parsing your file. Are you sure it\'s an iwrotetoday.txt that you exported here?');
    }
  };

  return (
    <div>
      <h1>Import + export your data</h1>
      <div className='page-content'>
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

        <h2>Export</h2>
        <p>
          To export your data, click "Export" and download the "iwrotetoday.txt" file.
        </p>
        <div className='button-parent'>
          <button className='import-export-button'>Export</button>
        </div>
      </div>
    </div>
  );
}

export default ImportExport;