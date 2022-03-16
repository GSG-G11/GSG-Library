// Logout Function

const logoutUserController = (req, res) => {
    res.clearCookie("access_token");
    res.json({
        msg: "Logout Successfully! LOL"
    })
}

module.exports = logoutUserController;