import { ENV } from '../utils'

export class Comment {
    async getCommentsVideo(token, idVideo) {
        const filter = `video=${idVideo}`
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.COMMENTS}/?${filter}`

        const params = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await fetch(url, params)
        const result = await response.json()
        if (response.status !== 200) throw result

        return result
    }

    async deleteComment(token, idComment) {
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.COMMENTS}/${idComment}/`

        const params = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await fetch(url, params)
        if (response.status !== 204) throw "Error in delete comment"

        return true
    }

    async createComment(token, idVideo, idUser, comment) {
        const url = `${ENV.BASE_API}/${ENV.API_ROUTES.COMMENTS}/`
        const params = {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                text: comment,
                user: idUser,
                video: idVideo
            })
        }
        const response = await fetch(url, params)
        const result = await response.json()

        if (response.status !== 201) throw result

        return result


    }
}