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
}