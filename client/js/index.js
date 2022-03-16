const submitBtn = document.getElementById('btn');
const email = document.getElementById('email');
const password = document.getElementById('password');
submitBtn.addEventListener('click', () => {
  checkInputs();
});

function checkInputs() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
    return false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
    return false;
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === '') {
    setErrorFor(password, 'password cannot be blank');
    return false;
  } else if (!isPassword(passwordValue)) {
    setErrorFor(password, 'Not a valid password');
    return false;
  } else {
    setSuccessFor(password);
    signIn();
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
const isEmail = (email) => {
  const emailLength = email.split('').length;
  return emailLength > 10 && email.split('').includes('@');
};
const isPassword = (password) => {
  const passwordLength = password.split('').length;
  return passwordLength > 8;
};

const signIn = () => {
  const request = {
    method: 'post',
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  };
  return fetch('/signin', request)
    .then((result) => result.json())
    .then(() => {
      window.location.href = '/';
    });
};
