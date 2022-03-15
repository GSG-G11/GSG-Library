const getBooksController = require('./getBooksConroller');
const signinController = require('./signinController');
const addToFavouriteController = require('./addToFavouriteController');
const { checkAuth } = require('./authentication')

module.exports = {
  signinController,
  getBooksController,
  addToFavouriteController,
  checkAuth
};
