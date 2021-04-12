import {videos} from "../db"

export const home = (req, res) => {
    res.render("Home", {pageTitle : "Home", videos});
}

export const search = (req, res) => {
    const {
        query : {term : searchingBy}
    } = req;
    res.render("Search", {pageTitle : "Search", searchingBy});
}

export const upload       = (req, res) => res.render("upload"      , {pageTitle : "Upload"});

export const video_detail = (req, res) => res.render("video_detail", {pageTitle : "Video Detail"});

export const edit_video   = (req, res) => res.render("edit_video"  , {pageTitle : "Edit Video"});

export const delete_video = (req, res) => res.render("delete_video", {pageTitle : "Delete Video"});