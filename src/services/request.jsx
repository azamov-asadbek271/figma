import axios from "axios";
 
const request = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "https://api.al-muamalat.uz/api",
});
request.interceptors.request.use(
    (respone) => {
        const token = localStorage.getItem("testUserToken")
        if(token) {
            respone.headers["Authorization"] = `Bearer ${token}`
        }
        return respone;
    },
      (error) => {
            console.log(error);
            return Promise.reject(error)
        }
)
request.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        const statusCode = error?.response?.status
        if(statusCode === 401) {
            localStorage.clear()
        }
        return Promise.reject(error)
    }
)
export  {request}