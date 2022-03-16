const getBooksController = require('./getBooksConroller');
const signinController = require('./signinController');
const addUserController = require('./addUserController');
const addToFavouriteController = require('./addToFavouriteController');
const logoutController = require('./logoutController')
const { checkAuth } = require('./authentication');

module.exports = {
  getBooksController,
  signinController,
  addUserController,
  addToFavouriteController,
  checkAuth,
  logoutController
};
