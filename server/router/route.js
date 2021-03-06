const { join } = require('path');
const express = require('express');
const router = express.Router();
const { checkAuth } = require('../controllers/authentication');

const {
  signinController,
  getBooksController,
  addToFavouriteController,
  addUserController,
  logoutController,
  serverError,
  clientError,
} = require('../controllers');

router.get('/', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'views', 'index.html'));
});

router.get('/signin', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'views', 'signin.html'));
});

router.get('/signup', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'views', 'signup.html'));
});

router.get('/favourites', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'views', 'favourite.html'));
});

router.get('/books/view', getBooksController);
router.post('/signin', signinController);
router.post('/signup', addUserController);
router.get('/book/:id/favourite', checkAuth, addToFavouriteController);
router.get('/logout', checkAuth, logoutController);
// router.get('/server/error', serverError);

router.use(clientError);
router.use(serverError);

module.exports = { router };
