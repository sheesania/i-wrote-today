import Export from './Export';
import Import from './Import';
import './css/ImportExport.css';

function ImportExport() {
  return (
    <div>
      <h1>Import + export your data</h1>
      <div className='page-content'>
        <Export/>
        <Import/>
      </div>
    </div>
  );
}

export default ImportExport;