const { addToFavouriteQuery } = require('../database');
const addToFavouriteController = (req, res) => {
  const myData = {
    userId: req.myToken.id,
    bookId: req.params.id,
  };

  addToFavouriteQuery(myData).then((data) => res.json(data.rows[0]));
};

module.exports = addToFavouriteController;
