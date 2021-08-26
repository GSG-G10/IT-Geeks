/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-console */
const { signupQuery } = require('../database/queries');
const { signupSchema } = require('../utils/validation/signUpValidation');
const { hashPassword } = require('../utils/hashPassword');

const signupData = (req, res) => {
  const { error } = signupSchema.validate(req.body);
  if (error) {
    res.send(error.details[0].message);
  } else {
    const {
      first_name, last_name, email_address, phono_no, password,
    } = req.body;
    hashPassword(password).then((hashed) => signupQuery(first_name, last_name, email_address, phono_no, hashed))
      .then(() => res.redirect(301, '/login.html'))
      .catch((err) => console.log(err));
  }
};

module.exports = signupData;
