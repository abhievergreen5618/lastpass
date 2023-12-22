// authSlice.js
import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false, // Set the initial value directly
    token: null, // Set the initial value directly
  },
  reducers: {
    loginSuccess: (state, action) => {
      console.log(action)
      state.isAuthenticated = true
      state.token = action.payload.token
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false
      state.token = null
    },
  },
})

export const { loginSuccess, logoutSuccess } = authSlice.actions
export const selectIsAuthenticated = (state) => state.persistedReducer.isAuthenticated
export const selectToken = (state) => state.persistedReducer.token

export default authSlice.reducer
