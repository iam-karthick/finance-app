import axios from 'axios';

// Use the full URL including protocol (http:// or https://)
const API_URL = 'http://localhost:8080/api/accounts'; 

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    // Handle error appropriately
    console.error('Login failed:', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    // Handle error appropriately
    console.error('Failed to fetch users:', error);
    throw error;
  }
};

export const createUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    // Handle error appropriately
    console.error('Failed to create user:', error);
    throw error;
  }
};

export const updateUser = async (id, user) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    // Handle error appropriately
    console.error('Failed to update user:', error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    // Handle error appropriately
    console.error('Failed to delete user:', error);
    throw error;
  }
};
