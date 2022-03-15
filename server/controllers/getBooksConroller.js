const getBooks = require("../database/queries/getBooks")

const getBooksController = ()=>{
    getBooks()
        .then(data => console.log(data.rows[0]))
        .catch(error => res.status(500).send(error));

};

module.exports = getBooksController;