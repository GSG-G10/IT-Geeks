/* eslint-disable camelcase */
const { loginQuery } = require('../database/queries');

const checkLogin = (req, res) => {
  const { email_address } = req.body;
  loginQuery(email_address)
    .then((result) => {
      if (result.rowCount) {

      }
    })
    // .catch(() => res.status(500).json({ msg: 'Internal Server Error' }));
    .catch((err) => console.log(err));
};

module.exports = checkLogin;
