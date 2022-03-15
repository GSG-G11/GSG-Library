const res = require("express/lib/response");
const getBooks = require("../database/queries/getBooks")

const getBooksController = ()=>{
    getBooks()
        .then(data => res.json(data.rows))
        .catch(error => res.status(500).send(error));

};

module.exports = getBooksController;