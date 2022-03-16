const express = require('express');
const router = express.Router();
const { checkAuth } = require('../controllers/authentication');

const { signinController, getBooksController, addToFavouriteController, logoutUserController } = require('../controllers');

router.get('/books/view', getBooksController);
router.post('/signin', signinController);
router.post('/book/:id/favourite', checkAuth, addToFavouriteController);

// Logout Rout & Controller
router.get('/logout', checkAuth, logoutUserController)

module.exports = { router };
