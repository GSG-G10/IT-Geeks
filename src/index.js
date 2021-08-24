/* eslint-disable no-console */
require('env2')('.env');
const app = require('./server');

const Port = app.get('port');

app.listen(Port, () => {
  console.log(`server is running at http://localhost:${Port}`);
});
