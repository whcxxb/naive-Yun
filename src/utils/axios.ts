import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

const service = axios.create()

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: unknown) => {
    Promise.reject(error)
  }
)

//响应拦截器
service.interceptors.response.use((res: AxiosResponse) => {
  return res.data
})
