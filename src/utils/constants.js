const SERVER_IP = "IP"

export const ENV = {
    BASE_PATH: `http://${SERVER_IP}`,
    BASE_API: `http://${SERVER_IP}/api`,
    API_ROUTES: {
        REGISTER: "auth/register",
        LOGIN: "auth/login",
        REFRESH_TOKEN: "auth/refresh_token",
        VIDEO: 'video'
    },
    JWT: {
        ACCESS_TOKEN: "access",
        REFRESH_TOKEN: "refresh"
    },

}

