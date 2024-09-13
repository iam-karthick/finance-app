import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/slices/authSlice';
import usersReducer from '../redux/slices/userSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
});

export default store;