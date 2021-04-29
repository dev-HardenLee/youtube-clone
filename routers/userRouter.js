import express from "express";
import routes from "../routes";
import {
    user_detail,
    edit_profile,
    change_password,
} from "../controllers/userController";
import {onlyPrivate} from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.edit_profile    , onlyPrivate, edit_profile);
userRouter.get(routes.change_password , onlyPrivate, change_password);
userRouter.get(routes.user_detail()   , user_detail);

export default userRouter;



