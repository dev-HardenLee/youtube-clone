import express from "express";
import routes from "../routes";
import {
    user_detail,
    getEditProfile,
    postEditProfile,
    change_password
} from "../controllers/userController";
import {onlyPrivate, uploadAvatar} from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.edit_profile    , onlyPrivate, getEditProfile);
userRouter.post(routes.edit_profile   , onlyPrivate, uploadAvatar, postEditProfile);
userRouter.get(routes.change_password , onlyPrivate, change_password);
userRouter.get(routes.user_detail()   , user_detail);

export default userRouter;



