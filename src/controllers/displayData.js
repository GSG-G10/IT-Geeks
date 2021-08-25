const { getDataQuery } = require('../database/queries');

const displayData = (req, res) => {
  getDataQuery()
    .then((result) => res.json(result.rows))
    .catch(() => res.status(500).json({ msg: 'Internal Server Error' }));
};

module.exports = displayData;
