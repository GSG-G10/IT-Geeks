/* eslint-disable no-console */
const { postDataQuery } = require('../database/queries');

const addData = (req, res) => {
  const {
    title, content, category, user_id: userID,
  } = req.body;
  postDataQuery(title, content, category, userID)
    .then(() => res.send('done'))
    .catch((err) => console.log(err));
};

module.exports = addData;
