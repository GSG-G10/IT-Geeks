const path = require('path');
const express = require('express');
const compression = require('compression');
const router = require('./controllers');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' }));

app.set('port', process.env.PORT || 8080);

app.use(router);

module.exports = app;
