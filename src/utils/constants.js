const SERVER_IP = "192.168.11.16:8000"

export const ENV = {
    BASE_PATH: `http://${SERVER_IP}`,
    BASE_API: `http://${SERVER_IP}/api`,
    API_ROUTES: {
        REGISTER: "auth/register",
        LOGIN: "auth/login",
        REFRESH_TOKEN: "auth/refresh_token",
        VIDEO: 'video',
        VIDEO_ACTIONS: 'video/actions',
        VIDEO_LIKE: 'video_like',
        FOLLOWINGS_VIDEOS: 'followings_videos',
        COMMENTS: 'comment',
        ME: 'user/me',
        USERS: 'users',
        FOLLOW: 'follow',
        FOLLOWEDS_COUNT: 'follow/followed/count',
        FOLLOWERS_COUNT: 'follow/followers/count',
        NOTIFICATIONS: 'notification',


    },
    JWT: {
        ACCESS_TOKEN: "access",
        REFRESH_TOKEN: "refresh"
    },
    TYPE_VIDEO: {
        FOLLOWING: "following",
        FOR_YOU: "for_you"
    },
    TAB_MENU_HEIGHT: 50,
    TYPE_NOTIFICATION: {
        FOLLOW: "FOLLOW",
        LIKE: 'LIKE',
        COMMENT: "COMMENT",
        SHARED: "SHARED"

    }

}

