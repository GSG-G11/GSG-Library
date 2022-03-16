
const logoutController = (req, res)=>{
    res.clearCookie("access_token").json({msg: 'logout seccesfuly'})
}

module.exports = logoutController;