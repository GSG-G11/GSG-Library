const app = require('./app');

app.listen(app.get('port'), (res, req) => {
  console.log('http://localhost:4000');
});