const csvFileInput = document.getElementById('csvFile');
const uploadButton = document.getElementById('uploadButton');

// Load the Google Cloud Storage client library
gapi.load('client', initGCSClient);

async function initGCSClient() {
  // Replace with the path to your JSON key file
  const keyFile = 'elevate-foundry-280fa96289f8.json';

  // Load the JSON key file
  const response = await fetch(keyFile);
  const serviceAccount = await response.json();

  // Initialize the Google Cloud Storage client
  gapi.client.init({
    'apiKey': serviceAccount.private_key_id,
    'clientId': serviceAccount.client_id,
    'scope': 'https://www.googleapis.com/auth/devstorage.read_write',
  }).then(() => {
    // Sign in with the service account
    return gapi.auth.authorize({
      'client_id': serviceAccount.client_id,
      'scope': 'https://www.googleapis.com/auth/devstorage.read_write',
      'immediate': true,
    });
  }).then(() => {
    console.log('GCS client initialized');
    uploadButton.addEventListener('click', uploadToGCS);
  }, (error) => {
    console.error('Error initializing GCS client:', error);
  });
}

function uploadToGCS() {
  const file = csvFileInput.files[0];

  if (file && file.type === 'text/csv') {
    const bucketName = 'your-bucket-name';
    const objectName = encodeURIComponent(file.name);

    // Read the file as a data URL
    const reader = new FileReader();
    reader.onload = function (event) {
      const fileData = event.target.result.split(',')[1];

      // Upload the file to Google Cloud Storage
      gapi.client.request({
        'path': `https://storage.googleapis.com/upload/storage/v1/b/${bucketName}/o`,
        'method': 'POST',
        'params': {
          'uploadType': 'media',
          'name': objectName,
        },
        'headers': {
          'Content-Type': file.type,
          'Content-Length': file.size,
        },
        'body': fileData,
      }).then((response) => {
        console.log('Successfully uploaded the CSV file:', response);
      }, (error) => {
        console.error('Error uploading the CSV file:', error);
      });
    };
    reader.readAsDataURL(file);
  } else {
    alert('Please select a valid CSV file.');
  }
}
