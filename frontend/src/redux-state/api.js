import axios from 'axios'
import store from '../store'
import { selectToken } from './authSlice'

const api = axios.create({
  baseURL: 'http://127.0.0.1/evergreen_projects/Github/lastpass/backend/public/api/',
})

api.interceptors.request.use((config) => {
  const token = selectToken(store.getState())
  console.log(store.getState())
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
