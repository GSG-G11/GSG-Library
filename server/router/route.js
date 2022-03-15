const router = require('express').Router();
const getBooksController = require('../controllers/getBooksConroller');


router.get('/books/view', getBooksController)


module.exports = router
