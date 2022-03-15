/* eslint-disable no-unused-vars */
const app = require('./app');

app.listen(app.get('port'), (res, req) => {
  console.log(`http://localhost:${app.get('port')}`);
});
