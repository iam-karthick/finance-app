import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import "./CreateAccount.css";
import logo from '../assets/Logo/rak-logo.png'; 

const CreateAccount = () => {
  const [accountDetails, setAccountDetails] = useState({
    name: "",
    email: "",
    password: "",
    consent: false,
    showPassword: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAccountDetails({ ...accountDetails, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setAccountDetails({ ...accountDetails, consent: e.target.checked });
  };

  const handleShowPassword = () => {
    setAccountDetails({
      ...accountDetails,
      showPassword: !accountDetails.showPassword,
    });
  };

  const validateFields = () => {
    const { name, email, password, consent } = accountDetails;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[a-zA-Z0-9]{8,}$/;

    if (name.trim() === "" || name.length > 50) {
      toast.error("Name is required and must be less than 50 characters.");
      return false;
    }

    if (!emailRegex.test(email)) {
      toast.error("Invalid email format.");
      return false;
    }

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and contain only alphabets and numbers."
      );
      return false;
    }

    if (!consent) {
      toast.error("You must agree to the terms and conditions.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      dispatch(addUser(accountDetails))
        .then(() => {
          toast.success("Account created successfully!");
          navigate("/");
        })
        .catch(() => {
          toast.error("Failed to create account.");
        });
    }
  };

  return (
    <Box className="create-account-container">
      <img src={logo} alt="Logo" className="create-account-logo" />

      <Typography variant="h6" className="create-account-heading" component="h6">
       <b> Create Account</b>
      </Typography>
      <form onSubmit={handleSubmit} className="create-account-form">
        <TextField
          label="Name"
          name="name"
          value={accountDetails.name}
          onChange={handleChange}
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{ shrink: true }}
          className="text-field"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={accountDetails.email}
          onChange={handleChange}
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{ shrink: true }}
          className="text-field"
        />
        <TextField
          label="Password"
          name="password"
          type={accountDetails.showPassword ? "text" : "password"}
          value={accountDetails.password}
          onChange={handleChange}
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  {accountDetails.showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{ shrink: true }}
          className="text-field"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={accountDetails.consent}
              onChange={handleCheckboxChange}
              name="consent"
              color="primary"
            />
          }
          label={
            <Typography component="span" className="consent-label">
              I agree to the <strong>Terms</strong> and <strong>Privacy</strong>
            </Typography>
          }
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Create Account
        </Button>
        <Typography variant="body2" component="p" className="login-link">
          Already have an account? <a href="/login">Login</a>
        </Typography>
      </form>
    </Box>
  );
};

export default CreateAccount;
