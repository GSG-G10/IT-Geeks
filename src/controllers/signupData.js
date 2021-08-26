/* eslint-disable camelcase */
/* eslint-disable no-console */
const bcrypt = require('bcryptjs');
const { signupQuery } = require('../database/queries');

const signupData = (req, res) => {
  const {
    first_name, last_name, email_address, phono_no, password,
  } = req.body;
  const hash = bcrypt.hash(password, 10);
  hash.then((hashed) => signupQuery(first_name, last_name, email_address, phono_no, hashed))
    .then(() => res.redirect('/'))
    .catch((err) => console.log(err));
};

module.exports = signupData;
