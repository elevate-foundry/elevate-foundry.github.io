// Configure the AWS SDK
AWS.config.update({
  region: 'us-east-1', // Set your AWS region
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:178270b0-2cbf-4913-860b-12784938fe7c', // Set your Cognito Identity Pool ID
  }),
});

// Create an S3 client
const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: 'elevate-foundry' }, // Set your S3 bucket name
});

// Get DOM elements
const csvFileInput = document.getElementById('csvFile');
const uploadButton = document.getElementById('uploadButton');

// Add a click event listener to the upload button
uploadButton.addEventListener('click', function () {
  const file = csvFileInput.files[0];

  if (file && file.type === 'text/csv') {
    // Upload the file to the S3 bucket
    s3.upload(
      {
        Key: file.name,
        Body: file,
        ACL: 'public-read', // Set the access level of the uploaded file, adjust as needed
      },
      function (err, data) {
        if (err) {
          console.error('Error uploading the CSV file:', err);
        } else {
          console.log('Successfully uploaded the CSV file:', data);
        }
      }
    );
  } else {
    alert('Please select a valid CSV file.');
  }
});
