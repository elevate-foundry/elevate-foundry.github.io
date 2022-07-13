var textBox = document.createElement('input');
textBox.type = 'text';
textBox.id = 'textBox';
document.body.appendChild(textBox);
var submitButton = document.createElement('input');
submitButton.type = 'button';
submitButton.value = 'Submit';
submitButton.id = 'submitButton';
document.body.appendChild(submitButton);
/* Display each text entry under text box with row number. */
var rowNumber = 0;
var textEntries = [];
var textEntriesDiv = document.createElement('div');
textEntriesDiv.id = 'textEntriesDiv';
document.body.appendChild(textEntriesDiv);
document.getElementById('submitButton').onclick = function() {
  var textEntry = document.getElementById('textBox').value;
  textEntries.push(textEntry);
  var textEntryDiv = document.createElement('div');
  textEntryDiv.innerHTML = rowNumber + ': ' + textEntry;
  textEntriesDiv.appendChild(textEntryDiv);
  rowNumber++;
};
