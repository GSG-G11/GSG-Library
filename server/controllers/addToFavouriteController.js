const { addToFavouriteQuery } = require('../database');
const addToFavouriteController = (req, res) => {
  const myData = {
    userId: req.myToken.id,
    bookId: req.params.id,
  };
  addToFavouriteQuery(myData)
    .then(() => res.redirect('/favourites'))
    .catch((err) => console.log(err));
};

module.exports = addToFavouriteController;
