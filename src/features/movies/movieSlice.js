import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  bookmarks: [],
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action) {
      state.movies.push(action.payload)
    },
    bookmarkMovie(state, action) {
      state.bookmarks.push(action.payload)
    },
    unBookmarkMovie(state, action) {
      const movieIndex = state.bookmarks.findIndex(
        (movie) => movie.id === action.payload
      )
      state.bookmarks.splice(movieIndex, 1)
    },
  },
})

export function getAllMovies(state) {
  return state.movies.movies[0]
}
export function getNewMovies(state) {
  return state.movies.movies[0].filter((movie) => movie.type === 'new')
}
export function getRecommandMovies(state) {
  return state.movies.movies[0].filter((movie) => movie.type === 'recommend')
}
export function getTrendingMovies(state) {
  return state.movies.movies[0].filter((movie) => movie.type === 'trending')
}
export function getOriginalMovies(state) {
  return state.movies.movies[0].filter((movie) => movie.type === 'original')
}
export function getMovieById(state, id) {
  return state.movies.movies[0].find((movie) => movie.id === id)
}
export function getBookmarById(state, id) {
  return Boolean(state.movies.bookmarks.find((movie) => movie.id === id))
}
export function getBookmarks(state) {
  return state.movies?.bookmarks
}

export const { setMovies, bookmarkMovie, unBookmarkMovie } = movieSlice.actions
export default movieSlice.reducer
