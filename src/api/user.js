import { Platform } from "react-native";
import { ENV } from "../utils";
export class User {
    async me(token) {
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.ME}/`;
        const params = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await fetch(url, params)
        const result = await response.json()

        if (response.status !== 200) throw result
        return result
    }

    async updateAvatar(token, imageUri) {
        const formData = new FormData()
        const imageType = imageUri.substring(imageUri.lastIndexOf('.') + 1)
        formData.append('avatar', {
            name: `avatar.${imageType}`,
            type: `avatar/${imageType}`,
            uri: Platform.OS === 'android' ? imageUri : imageUri.replace('file://', '')
        })

        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.ME}/`
        const params = {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        }

        const response = await fetch(url, params)
        const result = await response.json()

        if (response.status !== 200) throw result

        return result
    }


    async updateUser(token, data) {
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.ME}/`
        const params = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)

        }

        const response = await fetch(url, params)
        const result = await response.json()

        if (response.status !== 200) throw result

        return result
    }

    async getUser(token, idUser) {
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.USERS}/${idUser}/`
        const params = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const response = await fetch(url, params)
        const result = await response.json()

        if (response.status !== 200) throw result

        return result
    }
}