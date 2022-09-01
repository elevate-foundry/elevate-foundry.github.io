/* Create 'Generate magic link' button in middle of screen that upon click makes an API post request to 'https://realquickapp.stradum-dev.io/api/v1/transactions' and displays the response below button. */
var generateMagicLink = document.createElement('button');
generateMagicLink.innerHTML = 'Generate magic link';
generateMagicLink.style.position = 'absolute';
generateMagicLink.style.top = '50%';
generateMagicLink.style.left = '50%';
generateMagicLink.style.transform = 'translate(-50%, -50%)';
generateMagicLink.style.fontSize = '20px';
generateMagicLink.style.padding = '10px';
generateMagicLink.style.borderRadius = '5px';
generateMagicLink.style.border = 'none';
generateMagicLink.style.backgroundColor = '#00bcd4';
generateMagicLink.style.color = 'white';
generateMagicLink.style.cursor = 'pointer';
document.body.appendChild(generateMagicLink);
var response = document.createElement('div');
response.style.position = 'absolute';
response.style.top = '60%';
response.style.left = '50%';
response.style.transform = 'translate(-50%, -50%)';
response.style.fontSize = '10px';
response.style.padding = '5px';
// response.style.borderRadius = '5px';
// response.style.border = 'none';
// response.style.backgroundColor = '#00bcd4';
// response.style.color = 'white';
// response.style.cursor = 'pointer';
document.body.appendChild(response);
generateMagicLink.addEventListener('click', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://realquickapp.stradum-dev.io/api/v1/transactions', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      response.innerHTML = xhr.responseText;
    }
  };
  xhr.send(JSON.stringify({
    "amount": "100",
    "currency": "USD",
    "description": "Test transaction",
    "email": "test@test.com",
    "name": "Test User"
  }));
});
