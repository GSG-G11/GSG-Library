const signupBtn = document.getElementById('signupBtn');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const usernameErr = document.getElementById('usernameErr');
const emailErr = document.getElementById('emailErr');
const passwordErr = document.getElementById('passwordErr');

const serverError = document.getElementById('serverError');

const empty = () => {
  usernameErr.textContent = '';
  emailErr.textContent = '';
  passwordErr.textContent = '';
};

const errorHandle = (errorText, errorLabel, inputBox, e) => {
  errorLabel.textContent = errorText;
  inputBox.style.borderColor = '#FA7269';
  e.preventDefault();
};

const submitHandler = (event) => {
  if (username.validity.valueMissing) {
    empty(username);
    errorHandle('Please Enter username!', usernameErr, username, event);
  } else if (email.validity.valueMissing) {
    empty(email);
    errorHandle('Please Enter email!', emailErr, email, event);
  } else if (password.validity.valueMissing) {
    empty(password);
    errorHandle('Please Enter password!', passwordErr, password, event);
  } else if (password.value.length < 8) {
    empty(password);
    errorHandle(
      'Please Enter at least 8 characters!',
      passwordErr,
      password,
      event
    );
  } else {
    addUser();
  }
};

signupBtn.addEventListener('click', (e) => {
  submitHandler(e);
});

const addUser = () => {
  const request = {
    method: 'post',
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  };
  return fetch('/signup', request)
    .then((response) => response.json())
    .then((res) => {
      if (res.message === 'Registered Successfully!') {
        window.location.href = '/';
      } else if (
        res.message === 'internal server error' ||
        res.message === 'Error!'
      ) {
        window.location.href = '/server/error';
      } else {
        serverError.style.display = 'block';
        serverError.textContent = res.message;
      }
    });
};
