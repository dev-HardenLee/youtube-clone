import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import InstagramStrategy from "passport-instagram";
import KakaoStrategy from "passport-kakao";
import User from "./models/User";
import routes from "./routes";
import {
    githubLoginCallBack,
    facebookLoginCallBack,
    instagramLoginCallBack,
    kakaoLoginCallBack
} from "./controllers/userController"
passport.use(User.createStrategy());
passport.use(new GithubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: `http://localhost:4000${routes.githubCallBack}`
}, githubLoginCallBack));
passport.use(new FacebookStrategy({
    clientID: process.env.FB_ID,
    clientSecret: process.env.FB_SECRET,
    callbackURL: `http://localhost:4000${routes.facebookCallBack}`,
    profileFields: ['id', 'displayName', 'photos', 'email'],
    scope:['public_profile', 'email']
  }, facebookLoginCallBack));
passport.use(new InstagramStrategy({
    clientID: process.env.INSTAGRAM_ID,
    clientSecret: process.env.INSTAGRAM_SECRET,
    callbackURL: `http://localhost:4000${routes.instagramCallBack}`
  }, instagramLoginCallBack));
passport.use(new KakaoStrategy({
clientID: process.env.KAKAO_ID,
callbackURL: `http://localhost:4000${routes.kakaoCallBack}`
}, kakaoLoginCallBack));
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((id, done) => {
  User.findById(id, (error, user) => {
    done(error, user);
  });
});