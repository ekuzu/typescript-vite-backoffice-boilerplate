import { AxiosDefaults, AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { getToken, removeTokenCookies } from '../utils/tokenCookies'

export function setAuthorizationHeader(request: AxiosDefaults | AxiosRequestConfig | any, token: string) {
  request.headers.Authorization = `Bearer ${token}`
}

function onRequest(config: AxiosRequestConfig): AxiosRequestConfig {
  const token = getToken()
  token && setAuthorizationHeader(config, token)
  return config
}

function onRequestError(error: AxiosError): Promise<AxiosError> {
  return Promise.reject(error)
}

function onResponse(response: AxiosResponse): AxiosResponse {
  return response
}

function onResponseError(error: AxiosError): Promise<AxiosError | AxiosResponse> {
  if (error?.response?.status === 401) {
    removeTokenCookies()
  }

  return Promise.reject(error)
}

export function setupInterceptors(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
  return axiosInstance
}
