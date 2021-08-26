/* eslint-disable camelcase */
/* eslint-disable no-console */
const bcrypt = require('bcryptjs');
const { signupQuery } = require('../database/queries');
const { signupSchema } = require('../utils/validation/signUpValidation');

const signupData = (req, res) => {
  const { error } = signupSchema.validate(req.body);
  if (error) {
    res.send(error.details[0].message);
  } else {
    const {
      first_name, last_name, email_address, phono_no, password,
    } = req.body;
    const hash = bcrypt.hash(password, 10);
    hash.then((hashed) => signupQuery(first_name, last_name, email_address, phono_no, hashed))
      .then(() => res.redirect('/login'))
      .catch((err) => console.log(err));
  }
};

module.exports = signupData;
