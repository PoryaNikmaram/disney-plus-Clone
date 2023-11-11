import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  athenticated: false,
  username: '',
  email: '',
  profileImage: '',
  metaData: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.athenticated = true
      state.username = action.payload.displayName
      state.email = action.payload.email
      state.profileImage = action.payload.photoURL
      state.metaData.push(action.payload.metadata)
    },
    logout(state) {
      state.athenticated = false
      state.username = ''
      state.email = ''
      state.profileImage = ''
      state.metaData = []
    },
  },
})

export function getUsername(state) {
  return state.user.username
}
export function getUserEmail(state) {
  return state.user.email
}
export function getUserProfile(state) {
  return state.user.profileImage
}
export function getUserMetaData(state) {
  return state.user.metaData
}
export function athenticated(state) {
  return state.user.athenticated
}

export const { login, logout } = userSlice.actions
export default userSlice.reducer
