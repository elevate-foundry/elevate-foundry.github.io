require('dotenv').config();
const express = require('express');
const multer = require('multer');
const {Storage} = require('@google-cloud/storage');

const app = express();
const upload = multer({storage: multer.memoryStorage()});
const storage = new Storage({
  projectId: '<your_project_id>',
  credentials: JSON.parse(process.env.GCS_KEY_FILE_CONTENTS),
});

const bucketName = 'elevate-foundry';

app.use(express.static(__dirname));

app.post('/upload', upload.single('csvFile'), (req, res) => {
  const file = req.file;

  if (file && file.mimetype === 'text/csv') {
    const blob = storage.bucket(bucketName).file(file.originalname);
    const blobStream = blob.createWriteStream({resumable: false});

    blobStream.on('error', (error) => {
      res.status(500).send('Error uploading the CSV file: ' + error.message);
    });

    blobStream.on('finish', () => {
      res.status(200).send('Successfully uploaded the CSV file.');
    });

    blobStream.end(file.buffer);
  } else {
    res.status(400).send('Please select a valid CSV file.');
  }
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
