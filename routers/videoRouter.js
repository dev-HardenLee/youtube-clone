import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    video_detail,
    edit_video,
    delete_video
}from "../controllers/videoController"

const videoRouter = express.Router();

videoRouter.get(routes.upload      , getUpload);
videoRouter.post(routes.upload      , postUpload);
videoRouter.get(routes.edit_video  , edit_video);
videoRouter.get(routes.delete_video, delete_video);
videoRouter.get(routes.video_detail(), video_detail);

export default videoRouter;