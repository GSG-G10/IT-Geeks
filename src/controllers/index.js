const express = require('express');

const router = express.Router();
const { errorNotFound, errorServer } = require('./error');
const displayData = require('./displayData');
const addData = require('./addData');

router.get('/displayData', displayData);
router.post('/addData', addData);

router.use(errorNotFound);
router.use(errorServer);

module.exports = router;
