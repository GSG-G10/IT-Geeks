const signupForm = document.querySelector('.signup-form');
const firstNameInput = document.getElementById('first_name');
const lastNameInput = document.getElementById('last_name');
const phoneNoInputInput = document.getElementById('phone_no');
const emailInput = document.getElementById('email_address');
const passwordInput = document.getElementById('signup-password');
const signupCoPassword = document.getElementById('signup-co-password');
const errorAlert = document.querySelector('.error-alert');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (firstNameInput.value === '') {
    errorAlert.textContent = 'first name should not be empty';
  } else if (lastNameInput.value === '') {
    errorAlert.textContent = 'last name should not be empty';
  } else if (phoneNoInputInput.value === '') {
    errorAlert.textContent = 'phone number should not be empty';
  } else if (emailInput.value === '') {
    errorAlert.textContent = 'Email should not be empty';
  } else if (!emailInput.value.includes('@')) {
    errorAlert.textContent = 'Enter correct email address';
  } else if (passwordInput.value === '') {
    errorAlert.textContent = 'password should not be empty';
  } else if (signupCoPassword.value === '') {
    errorAlert.textContent = 'confirm password should not be empty';
  } else if (passwordInput.value !== signupCoPassword.value) {
    errorAlert.textContent = 'password dows not match';
  }

  fetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      // eslint-disable-next-line max-len
      first_name: firstNameInput.value, last_name: lastNameInput.value, phono_no: phoneNoInputInput.value, email_address: emailInput.value, password: passwordInput.value, confirmPassword: signupCoPassword.value,
    }),

  }).then((response) => {
    if (response.redirected) {
      window.location.href = response.url;
    }
  }).catch((err) => console.log(err));
});
