export const join             = (req, res) => res.render("join");
export const login            = (req, res) => res.render("login");
export const logout           = (req, res) => res.send("logout");
export const user_detail      = (req, res) => res.send("user_detail");
export const edit_profile     = (req, res) => res.render("editProfile");
export const change_password  = (req, res) => res.render("changePassword");