/* create text box for first_name and last_name, with submit button that displays data below with row number index before output. */
var firstName = document.createElement('input');
firstName.setAttribute('type', 'text');
firstName.setAttribute('id', 'first_name');
firstName.setAttribute('placeholder', 'First Name');
document.body.appendChild(firstName);
var lastName = document.createElement('input');
lastName.setAttribute('type', 'text');
lastName.setAttribute('id', 'last_name');
lastName.setAttribute('placeholder', 'Last Name');
document.body.appendChild(lastName);
var submitButton = document.createElement('button');
submitButton.innerHTML = 'Submit';
document.body.appendChild(submitButton);
var output = document.createElement('div');
output.setAttribute('id', 'output');
document.body.appendChild(output);
var index = 0;
submitButton.addEventListener('click', function() {
  var firstNameValue = document.getElementById('first_name').value;
  var lastNameValue = document.getElementById('last_name').value;
  var outputValue = document.getElementById('output');
  outputValue.innerHTML += index + ': ' + firstNameValue + ' ' + lastNameValue + '<br>';
  index++;
});

/* Add clear button to clear output */
var clearButton = document.createElement('button');
clearButton.innerHTML = 'Clear';
document.body.appendChild(clearButton);
clearButton.addEventListener('click', function() {
  var outputValue = document.getElementById('output');
  outputValue.innerHTML = '';
});
