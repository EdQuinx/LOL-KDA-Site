import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  swipe: undefined,
  slideState: 0,
  numGroups: 2,
  currentGroup: 0
}

const slidesReducer = createSlice({
  name: 'slide',
  initialState: initialState,
  reducers: {
    setSwipe: (state, action) => {
      state.swipe = action.payload
    },
    setSlideState: (state, action) => {
      state.slideState = action.payload
    },
    setNumGroups: (state, action) => {
      state.numGroups = action.payload
    },
    setCurrentGroup: (state, action) => {
      state.currentGroup = action.payload
    }
  }
})

const { actions, reducer } = slidesReducer
export const { setSwipe, setSlideState, setNumGroups, setCurrentGroup } = actions
export default reducer