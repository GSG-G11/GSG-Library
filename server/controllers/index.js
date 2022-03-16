const getBooksController = require('./getBooksConroller');
const signinController = require('./signinController');
const addToFavouriteController = require('./addToFavouriteController');
const { checkAuth } = require('./authentication');
const logoutUserController = require('./logoutUserController');

module.exports = {
  signinController,
  getBooksController,
  addToFavouriteController,
  checkAuth,
  logoutUserController
};
