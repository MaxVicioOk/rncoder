import { configureStore } from '@reduxjs/toolkit'
import shopReducer from '../features/shop/shopSlice'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
  },
})