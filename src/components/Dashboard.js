import React, { useEffect, useState } from 'react';
import { Container, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { getUsers, createUser, updateUser, deleteUser } from '../restService/api';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleCreateUser = async () => {
    const newUser = { name: 'New User', email: 'newuser@example.com' };
    const createdUser = await createUser(newUser);
    setUsers([...users, createdUser]);
  };

  const handleUpdateUser = async (id) => {
    const updatedUser = await updateUser(id, { name: 'Updated Name' });
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Button onClick={handleCreateUser} variant="contained" color="primary">
        Create User
      </Button>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={`${user.name} - ${user.email}`} />
            <Button onClick={() => handleUpdateUser(user.id)} variant="outlined">
              Update
            </Button>
            <Button onClick={() => handleDeleteUser(user.id)} variant="outlined" color="error">
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Dashboard;
