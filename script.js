const csvFileInput = document.getElementById('csvFile');
const uploadForm = document.getElementById('uploadForm');
const spinner = document.getElementById('spinner');
const message = document.getElementById('message');

uploadForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const file = csvFileInput.files[0];

  if (file && file.type === 'text/csv') {
    // Show the spinner
    spinner.style.display = 'block';
    message.textContent = '';

    const formData = new FormData(uploadForm);
    fetch('/upload', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      spinner.style.display = 'none';

      if (response.status === 200) {
        message.textContent = 'Successfully uploaded the CSV file.';
      } else {
        message.textContent = 'Error uploading the CSV file: ' + response.statusText;
      }
    }).catch((error) => {
      spinner.style.display = 'none';
      message.textContent = 'Error uploading the CSV file: ' + error.message;
    });
  } else {
    alert('Please select a valid CSV file.');
  }
});
