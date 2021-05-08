import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("join", {pageTitle : "Join"});
};

export const postJoin = async(req, res, next) => {
    const {
        body : {name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("join", {pageTitle : "Join"});
    }else{
        try{
            const user = await User({
                name, 
                email
            });
            await User.register(user, password);
            next();
        }catch(error){
            console.log(error);
            res.redirect(routes.home);
        }
    }
};

export const getLogin  = (req, res) => res.render("login", {pageTitle : "Log In"});
export const postLogin = passport.authenticate('local', {
        failureRedirect: routes.login,
        successRedirect: routes.home
    });

export const githubLogin = passport.authenticate("github");

export const githubLoginCallBack = async(_, __, profile, cb) => {
    const {
        _json : {id, avatar_url:avatarUrl, name, email}
    } = profile;
    try{
        const user = await User.findOne({email});
        if(user){
            user.githubId = id;
            user.avatarImgUrl = avatarUrl;
            user.save();
            return cb(null, user);
        }else{
            const newUser = await User.create({
                email,
                name,
                githubId:id,
                avatarImgUrl:avatarUrl
            });
            return cb(null, newUser);
        }
    }catch(error){
        return cb(error);
    }
}

export const postGithubLogIn = (req, res) => {
    res.redirect(routes.home);
}

export const facebookLogin = passport.authenticate('facebook');

export const facebookLoginCallBack = async(_, __, profile, cb) => {
    const{
        _json:{id, name, email}
    } = profile;
    const imgUrl = profile._json.picture.data.url;
    try{
        const user = await User.findOne({email});
        if(user){
            user.facebookId = id;
            user.avatarImgUrl = imgUrl;
            user.save();
            return cb(null, user);
        }else{
            const newUser = await User.create({
                email,
                name,
                facebookId:id,
                avatarImgUrl:imgUrl
            });
            return cb(null, newUser);
        }
    }catch(error){
        return cb(error);
    }
}

export const postFacebookLogin = (req, res) => {
    res.redirect(routes.home);
}

export const instagramLogin = passport.authenticate('instagram');

export const instagramLoginCallBack = (accessToken, refreshToken, profile, cb) => {
    console.log(accessToken, refreshToken, profile, cb);
}

export const postInstagramLogin = (req, res) => {
    res.redirect(routes.home);
}

export const kakaoLogin = passport.authenticate('kakao');

export const kakaoLoginCallBack = async(_, __, profile, cb) => {
    const{
        _json:{id, kakao_account:kakaoAccount}
    } = profile;
    const name        = kakaoAccount.profile.nickname;
    const imgUrl      = kakaoAccount.profile.profile_image_url;
    const kakaoEmail  = kakaoAccount.email;
    try{
        const user = await User.findOne({email:kakaoEmail});
        if(user){
            user.kakaoId = id;
            user.avatarImgUrl = user.avatarImgUrl ? user.avatarImgUrl : imgUrl;
            user.save();
            return cb(null, user);
        }else{
            const newUser = await User.create({
                email:kakaoEmail,
                name,
                kakaoId:id,
                avatarImgUrl:imgUrl
            });
            return cb(null, newUser);
        }
    }catch(error){
        return cb(error);
    }
}

export const postKakaoLogin = (req, res) => {
    res.redirect(routes.home);
}

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
}

export const getMe = (req, res) => {
    res.render("userDetail", {pageTitle: "User Detail", user:req.user});
}

export const user_detail = async(req, res) => {
    const {params:{id}}=req;
    try{
        const user = await User.findById(id).populate("videos");
        res.render("userDetail", {pageTitle: "User Detail", user});
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
}

export const getEditProfile  = (req, res) => {
    res.render("editProfile");
}

export const postEditProfile = async(req, res) => {
    const {
        body : {name, email},
        file
    } = req;
    try{
        const user = await User.findByIdAndUpdate(req.user._id,{
            name,
            email,
            avatarImgUrl: file ? file.path : req.user.avatarImgUrl
        });
        res.redirect(routes.me);
    }catch(error){
        console.log(error);
        res.redirect(`/users${routes.edit_profile}`);
    }
}

export const getChangePassword  = (req, res) => {
    res.render("changePassword");
}

export const postChangePassword = async(req, res) => {
    const {
        body:{password,newPassword,verifyNewPassword}
    } = req;
    console.log(password,newPassword,verifyNewPassword);
    try{
        if(newPassword !== verifyNewPassword){
            res.status(400);
            res.redirect(`/users${routes.change_password}`);
            return;
        }
        await req.user.changePassword(password, newPassword);
        res.redirect(routes.me);
    }catch(error){
        console.log(error);
        res.status(400);
        res.redirect(`/users${routes.change_password}`);
    }
}