import axios from 'axios'
import store from '../store'
import { selectToken } from './authSlice'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

api.interceptors.request.use((config) => {
  const token = selectToken(store.getState())
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
