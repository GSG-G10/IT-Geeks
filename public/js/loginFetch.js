const loginForm = document.getElementById('login-form');
const emailAddress = document.querySelector('.email_address');
const password = document.querySelector('.password');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

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
});
