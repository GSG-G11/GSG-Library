const connection = require('../config/connection')


const getBooks = ()=>{
    const sql = {
        Text: "select * from books",
        values: [] 
    }
    return connection.query(sql)
}   


module.exports = getBooks;
