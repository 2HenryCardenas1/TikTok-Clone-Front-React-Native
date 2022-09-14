const SERVER_IP = "IP:8000"

export const ENV = {
    BASE_PATH: `http://${SERVER_IP}`,
    BASE_API : `http://${SERVER_IP}/api`,
    API_ROUTES : {
        REGISTER : "auth/register",
        LOGIN : "auth/login",
        REFRESH_TOKEN : "auth/refresh_token",
    }, 
    JWT : {
        ACCESS_TOKEN : "access",
        REFRESH_TOKEN : "refresh"
    }
}

