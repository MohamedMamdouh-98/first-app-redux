import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state) => {
        state.isLoggedIn = !state.isLoggedIn
    },
  },
})

// Action creators are generated for each case reducer function
export const { logIn } = authSlice.actions

export default authSlice.reducer