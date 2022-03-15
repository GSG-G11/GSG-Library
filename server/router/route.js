const express = require('express');
const router = express.Router();
const { addToFavouriteController } = require('../controllers');
const { checkAuth } = require('../controllers/authentication');

router.post('/book/:id/favourite', checkAuth, addToFavouriteController);

module.exports = router;