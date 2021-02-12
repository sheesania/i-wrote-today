import './ImportExport.css';

function ImportExport() {
  return (
    <div>
      <h1>Import + export your data</h1>
      <div className='page-content'>
        <h2>Import</h2>
        <p>
          To import your data, open up an "iwrotetoday.txt" file that you exported earlier. Paste the contents here and click "Import". WARNING: All existing data will be overwritten!
        </p>
        <textarea></textarea>
        <div className='button-parent'>
          <button className='import-export-button'>Import</button>
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