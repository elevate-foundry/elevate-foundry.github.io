/* Integrate in Javascript to OpenAI's API with organization ID = "org-j9wTZB48z818oAFlkWO8DkbB" and API key = "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", and create a text box which passes text body in request parameter to API. */
var orgId = "org-j9wTZB48z818oAFlkWO8DkbB";
var apiKey = "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";
var apiUrl = "https://api.openai.com/v1/engines/davinci/completions";
var textBox = document.createElement('input');
textBox.type = 'text';
textBox.id = 'textBox';
textBox.placeholder = 'Enter text here';
document.body.appendChild(textBox);
var submitButton = document.createElement('button');
submitButton.innerHTML = 'Submit';
submitButton.onclick = function() {
  var text = document.getElementById('textBox').value;
  var request = new XMLHttpRequest();
  request.open('POST', apiUrl, true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Authorization', 'Bearer ' + apiKey);
  request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      var response = document.createElement('div');
      response.innerHTML = data.choices[0].text;
      document.body.appendChild(response);
    } else {
      console.log('error');
    }
  }
  request.send(JSON.stringify({
    "prompt": text,
    "max_tokens": null,
    "temperature": 0.7,
    "top_p": 1,
    "n": 1,
    "stream": false,
    "logprobs": null,
    "stop": "\n"
  }));
}
document.body.appendChild(submitButton);
