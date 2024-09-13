import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';

function UserDetails() {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Typography variant="h6">No user details available.</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4">User Details</Typography>
      <Typography variant="h6">Name: {user.name}</Typography>
      <Typography variant="h6">Email: {user.email}</Typography>
    </Container>
  );
}

export default UserDetails;
