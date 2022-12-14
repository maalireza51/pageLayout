import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export const get = async ( url, config={} ) => {
    return await axios.get(url, config)
}
export const post = async ( url, payload, config ) => {
    return await axios.post(url, config)
}
export const del = async ( url, config={} ) => {
    return await axios.delete(url, config)
}
export const put = async ( url, payload, config ) => {
    return await axios.post(url, config)
}