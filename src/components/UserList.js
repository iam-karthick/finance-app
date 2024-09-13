import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/slices/userSlice';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4">Users List</Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.id} button>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default UsersList;
