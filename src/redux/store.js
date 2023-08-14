import { configureStore } from '@reduxjs/toolkit';
import GreetingReducer from './greetingSlice';

const store = configureStore({
  reducer: {
    greeting: GreetingReducer,
  },
});

export default store;
