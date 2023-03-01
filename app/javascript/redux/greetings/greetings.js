import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Action string
const GET_MSG = "greetings/fetchGreetings";

//  Async Action
export const fetchGreetings = createAsyncThunk(GET_MSG, async () => {
  const response = await fetch("http://127.0.0.1:3000/api/greeting");
  const data = await response.json();
  return data;
});

//  Reducer
const greetingsSlice = createSlice({
  name: "greetings",
  initialState: { value: "", errors: "" },
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default greetingsSlice.reducer;
