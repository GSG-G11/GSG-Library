const {connection} = require("../config");

const addToFavouriteQuery = ({userId, bookId}) => {
    const sql = {
        text: `INSERT INTO favourit_books (user_id, book_id) VALUES ($1, $2) RETURNING *;`,
        values: [userId, bookId],
    }
    
    return connection.query(sql);
}

module.exports = addToFavouriteQuery;