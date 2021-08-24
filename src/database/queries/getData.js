const connection = require('../config/connection');

const getDataQuery = () => connection.query('SELECT posts.title,posts.content, posts.category, posts.date_created ,users.first_name ,users.last_name FROM users INNER JOIN posts ON posts.user_id = users.id');

module.exports = getDataQuery;
