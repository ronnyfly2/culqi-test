import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import Session from '@/composables/useSesion'
import { useAuth } from '@/stores/auth'

const API_URL = 'https://fepruebatecnicaculqi-backend-production.up.railway.app'

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const injectToken = (config: AxiosRequestConfig | any) => {
  try {
    const token = Session.getToken()

    if (token != null) {
      config.headers.Authorization = `Token ${token}`
    }
    return config
  } catch (error: any) {
    throw new Error(error)
  }
}

class Api {
  private instance: AxiosInstance | null = null

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp()
  }

  initHttp() {
    const http = axios.create({
      baseURL: API_URL,
    })

    http.interceptors.request.use(injectToken, (error) => Promise.reject(error))

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        // console.log('erro1', error.request, error.message)
        // console.log('erro2', error.message)
        const { response } = error
        return this.handleError(response)
      }
    )

    this.instance = http
    return http
  }

  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.http.request(config)
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.get<T, R>(url, config)
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config)
  }

  private handleError(error: any) {
    const user = useAuth()
    console.log('error:', error)
    const { status } = error

    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break
      }
      case StatusCode.Forbidden: {
        if (error.data.code === 'session_expired') {
          console.log('error', error.data.code)
        } else {
          user.logout()
        }
        break
      }
      case StatusCode.Unauthorized: {
        // Handle Unauthorized
        // Handle session_expired
        // console.log('error', error.data.message === 'Unauthorized')
        if (error.data.code === 'session_expired') {
          console.log('error', error.data.code)
        } else {
          user.logout()
        }
        break
      }
      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        break
      }
    }

    return Promise.reject(error)
  }
}
const api = new Api()
export default api
