import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'webApp',

  initialState: {
    currentTab: "home",
  },
  
  reducers: {
    home: state => {
      state.currentTab = "home"
    },
    favorites: state => {
      state.currentTab = "favorites"
    },
    profile: state => {
      state.currentTab = "profile"
    },
    cart: (state, action) => {
      state.currentTab = "cart"
    },
  }
})

// Action creators are generated for each case reducer function
export const { home, favorites, profile, cart } = appSlice.actions

export default appSlice.reducer