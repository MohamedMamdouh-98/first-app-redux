import { createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

const initState = { value: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.value += 1;
    },
    decrease: (state, action) => {
      state.value -= 1;
    },
  },
});
//-1 => create reducer
const counterReducer = (state = initState, action) => {
  //logic
  if (action.type === "increase") {
    return { ...state, value: state.value + action.payload };
  }
  if (action.type === "decrease") {
    return { ...state, value: state.value - action.payload };
  }
  if (action.type === "hide-show") {
    return { ...state, showCounter: !state.showCounter };
  }
  return state;
};
//-2 => create store
export const store = createStore(counterReducer);
