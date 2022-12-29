import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload
      localStorage.setItem('user', JSON.stringify(user, token))
      state.user = user
      state.token = token
    },
    logOut: (state) => {
      localStorage.clear()
      state.user = null
      state.token = null
    }
  }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: {
  auth: { user: string; token: string }
}) => state.auth.user

export const selectCurrentToken = (state: {
  auth: { user: string; token: string }
}) => state.auth.token
