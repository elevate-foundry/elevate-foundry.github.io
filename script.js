document.addEventListener('DOMContentLoaded', function () {
  const dropzone = document.getElementById('dropzone');

  dropzone.addEventListener('dragover', function (event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    this.style.backgroundColor = '#f0f0f0';
  });

  dropzone.addEventListener('dragleave', function (event) {
    this.style.backgroundColor = '';
  });

  dropzone.addEventListener('drop', function (event) {
    event.preventDefault();
    this.style.backgroundColor = '';

    const file = event.dataTransfer.files[0];

    if (file.type === 'text/csv') {
      handleCSVFile(file);
    } else {
      alert('Please upload a valid CSV file.');
    }
  });
});

function handleCSVFile(file) {
  const reader = new FileReader();

  reader.onload = function (event) {
    const csvData = event.target.result;
    processData(csvData);
  };

  reader.onerror = function () {
    alert('An error occurred while reading the file.');
  };

  reader.readAsText(file);
}

function processData(csvData) {
  // Process your CSV data here
  console.log(csvData);
}
