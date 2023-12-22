import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../src/redux-state/authSlice'
import { legacy_createStore as createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)

// Reducer for legacy store
const initialState = {
  sidebarShow: true,
  theme: 'light',
}

const legacyChangeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

// Create the legacy store
const legacyStore = createStore(legacyChangeState)

// Configure the Redux Toolkit store
const store = configureStore({
  reducer: {
    persistedReducer: persistedReducer,
    auth: authReducer,
    legacy: legacyChangeState, // Use the same reducer for the legacy store
    // ... other reducers
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store

export const persistor = persistStore(store)
