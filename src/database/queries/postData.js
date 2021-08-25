/* eslint-disable camelcase */
const connection = require('../config/connection');

const postDataQuery = (title, content, category, userID) => connection.query('INSERT INTO posts (title, content, category, user_id) VALUES ($1,$2,$3,$4);', [title, content, category, userID]);

module.exports = postDataQuery;
