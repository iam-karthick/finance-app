import React from 'react';
import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import UserDetails from './UserDetails';
import UsersList from './UserList';
import { AppBar, Toolbar, Button, Container, Typography } from '@mui/material';

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" component={Link} to="/dashboard/user-details">
            User Details
          </Button>
          <Button color="inherit" component={Link} to="/dashboard/users-list">
            Users List
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Navigate to="user-details" />} />
        <Route path="user-details" element={<UserDetails />} />
        <Route path="users-list" element={<UsersList />} />
      </Routes>
    </Container>
  );
}

export default Dashboard;
