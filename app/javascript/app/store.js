import { configureStore } from '@reduxjs/toolkit';
import messageReducer from '../feature/message/greetingSlice';

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export default store;
