const jwt = require("jsonwebtoken")
const privetKey = process.env.SECRET_KEY;

const checkAuth = (req, res, next) => {
    const token = req.cookies.access_token;

    jwt.verify(token, privetKey , (err, decodeToken) => {
        if (err) {
            res.send("Error")
        }
        else {
            if (decodeToken.id){
                req.myToken = decodeToken;
                next();
            }
            else{
                res.send('Login Page')
            }
        }
    })
}

module.exports = {
    checkAuth,
}