import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  counter: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    reset(state) {
      state.counter = initialState.counter
    },
    incrementByAmount(state, action) {
      state.counter += action.payload
    }
  }
})

export const {
  increment,
  decrement,
  reset,
  incrementByAmount
} = counterSlice.actions
export default counterSlice.reducer
