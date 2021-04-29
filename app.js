import bodyParser           from "body-parser";
import cookieParser         from "cookie-parser";
import express              from "express";
import passport             from "passport";
import session              from "express-session";
import MongoStore           from "connect-mongo";
import helmet               from "helmet";
import morgan               from "morgan";
import globalRouter         from "./routers/globalRouter";
import userRouter           from "./routers/userRouter";
import videoRouter          from "./routers/videoRouter";
import routes               from "./routes";
import { localsMiddleware } from "./middlewares";

import "./passport";

const app = express();
/*
* middleware
*/
app.use(helmet({ contentSecurityPolicy: false, }));
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(session({
    secret:process.env.COOKIE_SECRET,
    resave:true,
    saveUninitialized:false,
    store: MongoStore.create({mongoUrl:process.env.MONGO_URL})
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(localsMiddleware);

/*
* router
*/
app.use(routes.home  , globalRouter);
app.use(routes.users , userRouter);
app.use(routes.videos, videoRouter);

export default app;