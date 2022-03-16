const { getBooksQuery } = require('../database');

const getBooksController = (req, res) => {
  getBooksQuery()
    .then((data) => res.json(data.rows))
    .catch((error) => res.status(500).send(error));
};

module.exports = getBooksController;
