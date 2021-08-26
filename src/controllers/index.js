const express = require('express');

const router = express.Router();
const { errorNotFound, errorServer } = require('./error');
const displayData = require('./displayData');
const addData = require('./addData');
const signupData = require('./signupData');
const loginData = require('./loginData');

router.get('/displayData', displayData);
router.post('/addData', addData);
router.post('/signup', signupData);
router.post('/login', loginData);
router.use('/logout', (req, res) => {
  res.clearCookie('token').clearCookie('login').redirect('/');
});
router.get('/dashboard', (req, res, next) => {
  if (req.cookies.login) {
    next();
    res.json({ msg: 'welcome to your dashboard' });
  } else {
    res.json({ msg: 'sorry! you are not authorized' });
  }
});

router.use(errorNotFound);
router.use(errorServer);

module.exports = router;
