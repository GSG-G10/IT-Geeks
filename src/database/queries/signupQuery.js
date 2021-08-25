/* eslint-disable camelcase */
const connection = require('../config/connection');

const signupQuery = (first_name, last_name, email_address, phono_no, password) => connection.query('INSERT INTO users (first_name, last_name, email_address, phono_no, password) VALUES ($1,$2,$3,$4,$5);', [first_name, last_name, email_address, phono_no, password]);

module.exports = signupQuery;
