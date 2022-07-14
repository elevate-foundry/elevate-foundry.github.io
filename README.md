/* Create a input boxes for "first name" and "last name". */
var firstName = document.createElement('input');
firstName.setAttribute('type', 'text');
firstName.setAttribute('placeholder', 'First Name');
document.body.appendChild(firstName);
var lastName = document.createElement('input');
lastName.setAttribute('type', 'text');
lastName.setAttribute('placeholder', 'Last Name');
document.body.appendChild(lastName);
