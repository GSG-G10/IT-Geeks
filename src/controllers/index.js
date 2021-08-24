const express = require('express');

const router = express.Router();
const { errorNotFound, errorServer } = require('./error');

router.use(errorNotFound);
router.use(errorServer);

module.exports = router;
