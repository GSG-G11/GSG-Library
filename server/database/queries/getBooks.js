const connection = require('../config/connection')
const getBooks = ()=>{
    const sql = {
        text: "select * from books",
        values: [] 
    }
    return connection.query(sql)
}   

module.exports = getBooks;
