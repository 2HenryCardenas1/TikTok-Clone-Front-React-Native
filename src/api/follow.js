import { size } from 'lodash'
import { ENV } from '../utils'

export class Follow {
    async getFollowedsCount(token, userId) {
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.FOLLOWEDS_COUNT}/${userId}`

        const params = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await fetch(url, params)
        const result = await response.json()

        if (response.status !== 200) throw result

        return result.followed_count

    }
    async getFollowersCount(token, userId) {
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.FOLLOWERS_COUNT}/${userId}`

        const params = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await fetch(url, params)
        const result = await response.json()

        if (response.status !== 200) throw result

        return result.followers_count

    }

    async followUser(token, userId, idUserFollowed) {
        const filter = `user=${userId}&user_followed=${idUserFollowed}`
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.FOLLOW}/?${filter}`

        const params = {
            headers: {
                Authorization: `Bearer ${token}`

            }
        }

        const response = await fetch(url, params)
        const result = await response.json()

        if (response.status !== 200) throw result

        if (size(result) === 0) return false

        return true

    }

    async follow(token, userId, idUserFollowed) {
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.FOLLOW}/`

        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                user: userId,
                user_followed: idUserFollowed
            })
        }

        const response = await fetch(url, params)
        const result = await response.json()

        if (response.status !== 201) throw result

        return result



    }
    async unFollow(token, idFollow) {
        const utl = `${ENV.BASE_API}/${ENV.API_ROUTES.FOLLOW}/${idFollow}/`
        const params = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await fetch(utl, params)


        if (response.status !== 204) throw "Error..."

        return true


    }

    async getFollowing(token, userId, idUserFollower) {
        const filter = `user=${userId}&user_follower=${idUserFollower}`
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.FOLLOW}/?${filter}`
        const params = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await fetch(url, params)
        const result = await response.json()

        if (response.status !== 200) throw result

        return result[0]

    }
}