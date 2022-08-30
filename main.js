var full_name = document.createElement('input');
full_name.setAttribute('type', 'text');
full_name.setAttribute('id', 'full_name');
full_name.setAttribute('placeholder', 'Full Name');
document.body.appendChild(full_name);
var phone = document.createElement('input');
phone.setAttribute('type', 'text');
phone.setAttribute('id', 'phone');
phone.setAttribute('placeholder', 'Phone');
document.body.appendChild(phone);
var email = document.createElement('input');
email.setAttribute('type', 'text');
email.setAttribute('id', 'email');
email.setAttribute('placeholder', 'Email');
document.body.appendChild(email);
var submit = document.createElement('button');
submit.setAttribute('type', 'button');
submit.setAttribute('id', 'submit');
submit.innerHTML = 'Submit';
document.body.appendChild(submit);
var json = document.createElement('div');
json.setAttribute('id', 'json');
document.body.appendChild(json);
submit.onclick = function() {
  var full_name_value = document.getElementById('full_name').value;
  var phone_value = document.getElementById('phone').value;
  var email_value = document.getElementById('email').value;
  var json_value = {
    full_name: full_name_value,
    phone: phone_value,
    email: email_value
  };
  document.getElementById('json').innerHTML = JSON.stringify(json_value);
};
