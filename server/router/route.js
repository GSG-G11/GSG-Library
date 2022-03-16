const express = require('express');
const router = express.Router();
const { checkAuth } = require('../controllers/authentication');

const {
  signinController,
  getBooksController,
  addToFavouriteController,
  addUserController,
  logoutController
} = require('../controllers');

router.get('/books/view', getBooksController);
router.post('/signin', signinController);
router.post('/signup', addUserController);
router.post('/book/:id/favourite', checkAuth, addToFavouriteController);
router.get('/logout', checkAuth, logoutController)

module.exports = { router };
