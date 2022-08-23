import {useHttp} from "../hooks/useHttp.js";

export const CardServices = () => {
    const http = useHttp()

    const basePath = '/card'

    const getAll = async () => {
        const response = http.get(basePath)
        return (await response).data
    }

    const getOne = async (id) => {
        const response = http.get(`${basePath}/${id}`)
        return (await response).data
    }

    const add = async (body) => {
        const response = http.post(basePath, body)
        return (await response).data
    }

    const _delete = async (id) => {
        const response = http._delete(basePath + '/' + id)
        return (await response).data
    }

    return  {getAll, getOne, add, _delete}
}