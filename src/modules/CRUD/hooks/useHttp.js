import axios from "axios";

export const useHttp = () => {
    const baseUrl = 'https://immense-chamber-90015.herokuapp.com/api'

    const get = async (path) => {
        return axios.get(baseUrl + path)
    }

    const post = async (path, body) => {
        return axios.post(baseUrl + path, body)
    }

    const _delete = async (path) => {
        return axios.delete(baseUrl + path)
    }

    return {get, post, _delete}
}