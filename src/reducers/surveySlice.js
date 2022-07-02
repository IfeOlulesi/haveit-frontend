import { createSlice } from '@reduxjs/toolkit'

export const surveySlice = createSlice({
  name: 'survey',

  initialState: {
    surveyOpen: false,
  },
  
  reducers: {
    openSurvey: state => {
      state.surveyOpen = true
    },
    closeSurvey: state => {
      state.surveyOpen = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { openSurvey, closeSurvey } = surveySlice.actions

export default surveySlice.reducer