import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    video_detail,
    delete_video,
    getEditVideo,
    postEditVideo
}from "../controllers/videoController"
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

/**
 * Upload
 */
videoRouter.get(routes.upload , getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

/**
 * Detail
 */
 videoRouter.get(routes.video_detail(), video_detail);

/**
 * Update
 */
videoRouter.get(routes.edit_video()  , getEditVideo);
videoRouter.post(routes.edit_video()  , postEditVideo);

/**
 * Delete
 */
videoRouter.get(routes.delete_video(), delete_video);


export default videoRouter;