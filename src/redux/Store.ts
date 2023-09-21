import { configureStore } from '@reduxjs/toolkit'
import {apiSlice } from './Api/ApiSlice'
import CardSlice from './Api/fetures/CardSlice'
export const store = configureStore({
  reducer: {
    books:CardSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
   
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(apiSlice.middleware)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch