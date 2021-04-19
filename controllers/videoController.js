import routes from "../routes";
import Video from "../models/Video";

export const home = async(req, res) => {
    try{
        const videos = await Video.find({}).sort({_id:-1});
        console.log(videos);
        res.render("Home", {pageTitle : "Home", videos});
    }catch(error){
        console.log(error);
        res.render("Home", {pageTitle : "Home", videos : []});
    }
}

export const search = async(req, res) => {
    const {
        query : {term : searchingBy}
    } = req;
    let videos = [];
    try{
        videos = await Video.find({title : {$regex:searchingBy, $options:"i"} })
    }catch(error){
        console.log(error);
    }
    res.render("Search", {pageTitle : "Search", searchingBy, videos});
}

export const getUpload = (req, res) => res.render("upload"      , {pageTitle : "Upload"});

export const postUpload = async(req, res) => {
    const {
        body : {title, description},
        file : {path}
    } = req;
    const newVideo = await Video.create({
        fileUrl : path,
        title,
        description
    });
    console.log(newVideo);
    res.redirect(routes.video_detail(newVideo.id));
}

export const video_detail = async(req, res) => {
    const {
        params:{id}
    } = req;
    try{
        const video = await Video.findById(id);
        res.render("videoDetail", {pageTitle : video.title, video});
    }catch(error){
        res.redirect(routes.home)
    }
}

export const getEditVideo = async(req, res) => {
    const {
        params : {id}
    } = req;
    try{
        const video = await Video.findById(id);
        res.render("editVideo"  , {pageTitle : `Edit ${video.title}`, video});
    }catch(error){
        res.redirect(routes.home);
    }
}

export const postEditVideo = async(req, res) => {
    const{
        params:{id},
        body:{title, description}
    } = req;
    try{
        await Video.findOneAndUpdate({_id : id}, {title, description});
        res.redirect(routes.video_detail(id));
    }catch(error){
        res.redirect(routes.home);
    }
};

export const delete_video = async(req, res) => {
    const {
        params : {id}
    } = req;
    try{
        await Video.findOneAndRemove({_id:id});
    }catch(error){
        
    }
    res.redirect(routes.home);
    //res.render("deleteVideo", {pageTitle : "Delete Video"});
};