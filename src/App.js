import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import Dashboard from './components/Dashboard';
import store from './redux/store'; // Make sure the store is correctly imported

function App() {
  return (
    <Provider store={store}>  {/* Wrap your app with Provider and pass the store */}
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/create-account" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
      <ToastContainer />
    </Provider>
  );
}

export default App;
