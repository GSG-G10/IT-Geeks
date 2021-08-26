const connection = require('../config/connection');

const loginQuery = (email) => connection.query(`SELECT email_address FROM users WHERE email_address = '${email}'`);

module.exports = loginQuery;
