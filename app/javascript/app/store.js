import { configureStore } from '@reduxjs/toolkit';
import messageReducer from '../feature/message/messageSlice';

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export default store;
