// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, getUsers, createUser, updateUser, deleteUser } from '../../restService/api'; // Ensure this path is correct

// Thunks
export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await loginUser(credentials);
    return response;
  } catch (error) {
    return rejectWithValue(error.response.data || 'Login failed');
  }
});

export const fetchUsers = createAsyncThunk('auth/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await getUsers();
    return response;
  } catch (error) {
    return rejectWithValue(error.response.data || 'Failed to fetch users');
  }
});

export const addUser = createAsyncThunk('auth/addUser', async (user, { rejectWithValue }) => {
  try {
    const response = await createUser(user);
    return response;
  } catch (error) {
    return rejectWithValue(error.response.data || 'Failed to create user');
  }
});

export const modifyUser = createAsyncThunk('auth/modifyUser', async ({ id, user }, { rejectWithValue }) => {
  try {
    const response = await updateUser(id, user);
    return response;
  } catch (error) {
    return rejectWithValue(error.response.data || 'Failed to update user');
  }
});

export const removeUser = createAsyncThunk('auth/removeUser', async (id, { rejectWithValue }) => {
  try {
    await deleteUser(id);
    return id;
  } catch (error) {
    return rejectWithValue(error.response.data || 'Failed to delete user');
  }
});

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create User
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.loading = false;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update User
      .addCase(modifyUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(modifyUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
        state.loading = false;
      })
      .addCase(modifyUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete User
      .addCase(removeUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
        state.loading = false;
      })
      .addCase(removeUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
