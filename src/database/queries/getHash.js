const connection = require('../config/connection');

const getHash = (email) => connection.query(`SELECT password FROM users WHERE email_address = '${email}'`);

module.exports = getHash;
