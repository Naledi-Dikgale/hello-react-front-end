import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'greetings/fetchGreeting',
  async () => {
    try {
      const res = await fetch('http://localhost:3000/api/v1/messages');
      const data = await res.json();
      return data.greeting;
    } catch (e) {
      return e.message;
    }
  },
);

const initialState = {
  message: '',
  isLoading: true,
};

export const GreetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchGreeting.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        message: action.payload,
      }))
      .addCase(fetchGreeting.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default GreetingSlice.reducer;
