const path = require('path');

const serverError = (request, response) => {
  response
    .status(500)
    .sendFile(path.join(__dirname, '..', '..', '..', 'views', '500.html'));
};

module.exports = { serverError };
