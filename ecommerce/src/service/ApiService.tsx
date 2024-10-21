import axios from "axios";

export const ApiService = axios.create({
    baseURL: 'https://iassistant.ideas2it.com/api',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})

ApiService.interceptors.request.use((config: any) => {
    const token = localStorage.getItem("accessToken")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
    },
    (error: any) => {
        console.log("Request error : ", error)
        return Promise.reject(error)
    }
)

ApiService.interceptors.response.use((response: any) => {
    return response
    },
    (error: any) => {
        if (error.response && error.response.status === 401) {
            console.log("Unauthorized. Token espired")
            localStorage.removeItem("accessToken")
            window.location.href = "/login"
        }
        return Promise.reject(error)
    }
)