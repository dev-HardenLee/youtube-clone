import {videos} from "../db";
import routes from "../routes";

export const home = (req, res) => {
    res.render("Home", {pageTitle : "Home", videos});
}

export const search = (req, res) => {
    const {
        query : {term : searchingBy}
    } = req;
    res.render("Search", {pageTitle : "Search", searchingBy, videos});
}

export const getUpload = (req, res) => res.render("upload"      , {pageTitle : "Upload"});

export const postUpload = (req, res) => {
    const {
        body : {file, title, description}
    } = req;
    // To Do : Upload and save Video
    res.redirect(routes.video_detail(543534534));
}

export const video_detail = (req, res) => res.render("video_detail", {pageTitle : "Video Detail"});

export const edit_video   = (req, res) => res.render("edit_video"  , {pageTitle : "Edit Video"});

export const delete_video = (req, res) => res.render("delete_video", {pageTitle : "Delete Video"});