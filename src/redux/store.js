import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import movieSlice from '../features/movies/movieSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieSlice,
  },
})

export default store
