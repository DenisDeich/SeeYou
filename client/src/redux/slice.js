import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const streamSlice = createSlice({
  name: "stream",
  initialState,
  reducers: {
    //     optionName: (state, action) => {
    //       state.value += action.payload;
    //     },
  },
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;
