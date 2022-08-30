/* Create "Generate identity verification link" button that on submit makes an API post to url "https://realquickapp.stradum-dev.io/api/v1/transactions" and if transaction is successful, displays the JSON response below the button. */
var button = document.createElement('button');
button.innerHTML = 'Generate identity verification link';
document.body.appendChild(button);
button.addEventListener('click', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://realquickapp.stradum-dev.io/api/v1/transactions', true);
//   xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var response = document.createElement('div');
      response.innerHTML = xhr.responseText;
      document.body.appendChild(response);
    }
  };
//   xhr.send(JSON.stringify({
//     "transaction": {
//       "transaction_type": "identity_verification",
//       "transaction_data": {
//         "first_name": "John",
//         "last_name": "Doe",
//         "email": "john.doe@example.com",
//         "phone": "555-555-5555",
//         "dob": "01/01/1980",
//         "ssn": "123-45-6789",
//         "address": "123 Main St",
//         "city": "New York",
//         "state": "NY",
//         "zip": "10001"
//       }
//     }
  }));
});
