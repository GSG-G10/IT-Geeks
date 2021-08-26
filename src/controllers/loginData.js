/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
const { loginQuery } = require('../database/queries');
const { comparePassword } = require('../utils/hashPassword');
const getHash = require('../database/queries/getHash');

const checkLogin = (req, res) => {
  const { email_address, password } = req.body;
  loginQuery(email_address)
    .then((result) => {
      if (result.rowCount) {
        getHash(email_address).then((hash) => comparePassword(password, hash.rows[0].password, (err, result) => {
          if (result) {
            console.log('logged');

            jwt.sign({ is_login: true }, 'acdefghij', (error, token) => {
              if (error) {
                console.log(error);
                res.status(500).json({ msg: 'internal server error !' });
              } else {
                console.log(token);
                res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 900000 }).redirect(301, '/dashboard.html');
              }
            });
          } else {
            console.log('password incorrect');
            res.send('password incorrect');
          }
        }));
      } else {
        console.log('email or password are Incorrect');
        res.send('email or password are Incorrect');
      }
    })
    // .catch(() => res.status(500).json({ msg: 'Internal Server Error' }));
    .catch((err) => console.log(err));
};

module.exports = checkLogin;
