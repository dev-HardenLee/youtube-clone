import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", {pageTitle : "Join"});
};

export const postJoin = (req, res) => {
    const {
        body : {name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("join", {pageTitle : "Join"});
    }else{
        // To Do : Register User
        // To Do : Log User In
        res.redirect(routes.home);
    }
};

export const getLogin  = (req, res) => res.render("login", {pageTitle : "Log In"});
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}
export const logout = (req, res) => {
    // To DO : Process Log Out
    res.redirect(routes.home);
}
export const user_detail      = (req, res) => res.render("userDetail");
export const edit_profile     = (req, res) => res.render("editProfile");
export const change_password  = (req, res) => res.render("changePassword");