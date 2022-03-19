import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

export function postRequest<T>(data: any | null, suffix: string, header: any | null) {
    console.log("post: " + BASE_URL + suffix)
    return axios.request<T>({
        method: 'post',
        url: BASE_URL + suffix,
        data: data,
        headers: header
    })
}

export function getRequest<T>(suffix: string, header: any | null) {
    console.log("get: " + BASE_URL + suffix)
    return axios.request<T>({
        method: 'get',
        url: BASE_URL + suffix,
        headers: header
    })
}
