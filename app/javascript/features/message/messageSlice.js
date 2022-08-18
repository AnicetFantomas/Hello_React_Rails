import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const fetchMessage = createAsyncThunk(
  "messages/fetchMessages",
  async () => {
    const response = await fetch("/api/greetings");
    const message = await response.json();
    return message.message;
  }
);

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: '',
  },
  reducers: {},
  extraReducers: {
    [fetchMessage.fulfilled]: (state, action) => {
      const newState = { message: action.payload };
      return newState;
    }
  }
});

export default messageSlice.reducer;