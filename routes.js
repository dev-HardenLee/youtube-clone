/**
 * Global
 */ 
const HOME   = "/";
const JOIN   = "/join";
const LOGIN  = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

/**
 * Users
 */
const USERS           = "/users";
const EDIT_PROFILE    = "/edit-profile";
const USER_DETAIL     = "/:id";
const CHANGE_PASSWORD = "/change-password";
const ME              = "/me";

/**
 * Videos
 */
const VIDEOS       = "/videos";
const UPLOAD       = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO   = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

/**
 * GITHUB
 */
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

/**
 * FACEBOOK
 */
const FB = "/auth/facebook";
const FB_CALLBACK = "/auth/facebook/callback";

/**
 * INSTAGRAM
 */
const INSTAGRAM = "/auth/instagram";
const INSTA_CALLBACK = "/auth/instagram/callback";

/**
 * KAKAO
 */
const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/oauth";

const routes = {
    home            : HOME,
    join            : JOIN,
    login           : LOGIN,
    logout          : LOGOUT,
    search          : SEARCH,

    users           : USERS,
    user_detail     : (id) => {
        if(id){
            return `/users/${id}`;
        }else{
            return USER_DETAIL;
        }
    },
    edit_profile    : EDIT_PROFILE,
    change_password : CHANGE_PASSWORD,

    videos          : VIDEOS,
    upload          : UPLOAD,
    video_detail    : (id) => {
        if(id){
            return `/videos/${id}`;
        }else{
            return VIDEO_DETAIL;
        }
    },   
    edit_video      : (id) => {
        if(id){
            return `/videos/${id}/edit`;
        }else{
            return EDIT_VIDEO;
        }
    },
    delete_video    : (id) => {
        if(id){
            return `/videos/${id}/delete`;
        }else{
            return DELETE_VIDEO;
        }
    },
    github : GITHUB,
    githubCallBack : GITHUB_CALLBACK,
    me : ME,
    facebook:FB,
    facebookCallBack:FB_CALLBACK,
    instagram:INSTAGRAM,
    instagramCallBack:INSTA_CALLBACK,
    kakao:KAKAO,
    kakaoCallBack:KAKAO_CALLBACK
};

export default routes;




