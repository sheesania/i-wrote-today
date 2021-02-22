function Export() {
  const handleExport = () => {
    const exportedData = JSON.stringify(window.localStorage);
    const exportedDataLink = `data:text/json;charset=utf-8,${encodeURIComponent(exportedData)}`;

    // make a throwaway link element, click it, and then remove it
    const link = window.document.createElement('a');
    link.href = exportedDataLink;
    link.download = 'iwrotetoday.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h2>Export</h2>
      <p>
        To export your data, click "Export" and download the "iwrotetoday.txt" file.
      </p>
      <div className='button-parent'>
        <button className='import-export-button' onClick={handleExport}>Export</button>
      </div>
    </div>
  );
}

export default Export;