import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthProvider } from './context/AuthContext';
import store from './redux/store';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Container } from '@mui/material';

// Main App component with routing
const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Container>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Container>
        </Router>
      </AuthProvider>
    </Provider>
  );
};

export default App;
