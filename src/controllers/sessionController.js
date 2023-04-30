function getSignUp(req, res) {
    if (req.query.error) {
        return res.render("pages/signup", { error: true });
    }
    return res.render("pages/signup", { error: false });
}

function postSignUp(req, res) {
    return res.redirect("/home");
}

function getLogin(req, res) {
    if (req.query.error) {
        return res.render("pages/login", { error: true });
    }
    return res.render("pages/login", { error: false });
}

function postLogin(req, res) {
    return res.redirect("/home");
}

function getLogout(req, res) {
    req.logout(() => { });
    return res.redirect('/session/login');
}

export default { getSignUp, postSignUp, getLogin, postLogin, getLogout };