/* eslint-disable camelcase */
/* eslint-disable no-console */
const { signupQuery } = require('../database/queries');

const signupData = (req, res) => {
  const {
    first_name, last_name, email_address, phono_no, password,
  } = req.body;
  signupQuery(first_name, last_name, email_address, phono_no, password)
    .then(() => res.redirect('/'))
    .catch((err) => console.log(err));
};

module.exports = signupData;
