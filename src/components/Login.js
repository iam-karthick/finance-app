import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";
import "./Login.css";
import logo from "../assets/Logo/rak-logo.png";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(credentials)).unwrap();
      navigate("/dashboard"); // Redirect on successful login
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <Box
      className="login-container"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        className="login-form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width={1}
        maxWidth={400}
        padding={3}
        boxShadow={3}
        borderRadius={2}
      >
        <img src={logo} alt="Logo" className="login-form-logo" />

        <Typography
          variant="h6"
          className="login-form-heading"
          component="h6"
        >
          <b> Login:</b>
        </Typography>
        {error && (
          <Typography color="error" className="error-message">
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit} className="login-form">
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
        <Box className="signup-button" mt={2}>
          <Typography variant="body2">
            Don't have an account?{" "}
            <Link to="/create-account">Create an Account</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
