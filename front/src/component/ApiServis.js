import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    }
})
export const reg = async (data) => {
    try {
        const response = await axiosInstance.post(`/api/auth/reg`, data)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
export const auth = async (data) => {
    try {
        const response = await axiosInstance.post(`/api/auth/log`, data)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
export const createState = async (data, config) => {
    try {
        const response = await axiosInstance.post(`/api/state/`, data, config)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
export const getState = async (params) => {
    try {
        const response = await axiosInstance.get(`/api/state`, params)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
export const getOneState = async (id, params) => {
    try {
        const response = await axiosInstance.get(`/api/state/${id}`, params)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
export const delState = async (id, params) => {
    try {
        const response = await axiosInstance.delete(`/api/state/${id}`, params)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
// export const updateState = async (id, params) => {
//     try {
//         const response = await axiosInstance.put(`/api/state/${id}`, params)
//         return response.data
//     } catch (e) {
//         console.log(e)
//     }
// }
export const getUsers = async (params) => {
    try {
        const response = await axiosInstance.get(`/api/users/`, params)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
export const getOneUser = async (id, params) => {
    try {
        const response = await axiosInstance.get(`/api/users/${id}`, params)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
export const delOneUser = async (id, params) => {
    try {
        const response = await axiosInstance.delete(`/api/users/${id}`, params)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
// export const updateUser = async (id, params) => {
//     try {
//         const response = await axiosInstance.put(`/api/users/${id}`, params)
//         return response.data
//     } catch (e) {
//         console.log(e)
//     }
// }
export const getStatuses = async (params) => {
    try {
        const response = await axiosInstance.get(`/api/status/`, params)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
export const getStatus = async (id, params) => {
    try {
        const response = await axiosInstance.get(`/api/status/${id}`, params)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
export const updateStateStatus = async (id, data, params) => {
    try {
        const response = await axiosInstance.put(`/api/status/${id}`, data, params)
        return response.data
    } catch (e) {
        console.log(e)
    }
}


