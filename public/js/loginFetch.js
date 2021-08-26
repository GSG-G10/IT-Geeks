const loginForm = document.getElementById('login-form');
const emailAddress = document.querySelector('.email_address');
const password = document.querySelector('.password');
const errorAlert = document.querySelector('.error-alert');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailAddress.value === '') {
    errorAlert.textContent = 'Email should not be empty';
  } else if (!emailAddress.value.includes('@')) {
    errorAlert.textContent = 'Enter correct email address';
  } else if (password.value === '') {
    errorAlert.textContent = 'password should not be empty';
  } else {
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email_address: emailAddress.value, password: password.value,
      }),

    }).then((response) => {
      if (response.redirected) {
        window.location.href = response.url;
      }
    }).catch((err) => console.log(err));
  }
});
