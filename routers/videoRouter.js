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
import { uploadVideo, onlyPrivate } from "../middlewares";
const videoRouter = express.Router();

/**
 * Upload
 */
videoRouter.get(routes.upload , onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

/**
 * Detail
 */
 videoRouter.get(routes.video_detail(), video_detail);

/**
 * Update
 */
videoRouter.get(routes.edit_video()  , onlyPrivate, getEditVideo);
videoRouter.post(routes.edit_video()  , onlyPrivate, postEditVideo);

/**
 * Delete
 */
videoRouter.get(routes.delete_video(), onlyPrivate, delete_video);


export default videoRouter;