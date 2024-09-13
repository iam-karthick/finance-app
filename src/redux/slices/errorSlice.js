import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const errorSlice = createSlice({
  name: 'error',
  initialState: {
    message: null,
  },
  reducers: {
    setError: (state, action) => {
      state.message = action.payload;
      toast.error(action.payload);
    },
    clearError: (state) => {
      state.message = null;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
