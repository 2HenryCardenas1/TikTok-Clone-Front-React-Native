import AsyncStorage from "@react-native-async-storage/async-storage";

import jwtDecode from "jwt-decode";
import {ENV} from '../utils'


//Save tokens in storage

async function saveToken(access,refresh){
    await AsyncStorage.setItem(ENV.JWT.ACCESS_TOKEN,access)
    await AsyncStorage.setItem(ENV.JWT.REFRESH_TOKEN,refresh)
}

async function getToken(){
    const access = await AsyncStorage.getItem(ENV.JWT.ACCESS_TOKEN)
    const refresh = await AsyncStorage.getItem(ENV.JWT.REFRESH_TOKEN)

    return {
        access,refresh
    }
}

function hashExpired(token){
    if(!token) return false
    //exp = date for token
    const {exp} = jwtDecode(token)
    const currentDate = new Date().getTime()
    const expiredDate = new Date(exp * 1000).getTime()

    if(currentDate > expiredDate){
        return true
    }
    return false

}

async function removeToken(){
    await AsyncStorage.removeItem(ENV.JWT.ACCESS_TOKEN)
    await AsyncStorage.removeItem(ENV.JWT.REFRESH_TOKEN)
}

export const jwt = {
    saveToken,
    getToken,
    hashExpired,
    removeToken
}
