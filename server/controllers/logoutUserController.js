// Logout Function

const logoutUserController = (req, res) => {
    res.clearCookie("access_token").redirect("/");
}

module.exports = logoutUserController;