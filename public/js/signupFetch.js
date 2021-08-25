const signupForm = document.querySelector('.signup-form');
const firstNameInput = document.getElementById('first_name');
const lastNameInput = document.getElementById('last_name');
const phoneNoInputInput = document.getElementById('phone_no');
const emailInput = document.getElementById('email_address');
const passwordInput = document.getElementById('signup-password');

signupForm.addEventListener('submit', (e) => {
  fetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // eslint-disable-next-line max-len
    body: JSON.stringify({
      // eslint-disable-next-line max-len
      first_name: firstNameInput.value, last_name: lastNameInput.value, phono_no: phoneNoInputInput.value, email_address: emailInput.value, password: passwordInput.value,
    }),

  }).catch((err) => console.log(err));
});
