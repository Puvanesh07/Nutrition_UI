import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom'; // Import Link from React Router

const RegisterPage = () => {
  const [values, setValues] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic here
    console.log('Registration submitted:', values);
  };

  return (
    <Container maxWidth="xs" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={values.name}
            onChange={handleChange('name')}
            required
          />
          <TextField
            label="Age"
            variant="outlined"
            fullWidth
            margin="normal"
            value={values.age}
            onChange={handleChange('age')}
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Gender</InputLabel>
            <Select
              value={values.gender}
              onChange={handleChange('gender')}
              required
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Password</InputLabel>
            <TextField
              type={values.showPassword ? 'text' : 'password'}
              variant="outlined"
              label="Password"
              value={values.password}
              onChange={handleChange('password')}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{
              mt: 2,
              background: 'linear-gradient(to right, #4CAF50, #8BC34A)',
              color: 'white',
              padding: '6px 12px',
              fontSize: '16px',
              margin: '0 auto',
              '&:hover': {
                background: 'linear-gradient(to right, #8BC34A, #4CAF50)',
                color: 'black',
              },
            }}
          >
            Register
          </Button>
          </Link>
        </form>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          {/* Use the Link component to navigate to the Google sign-up */}
          <Link to="/google-login" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{ borderColor: 'rgba(0, 0, 0, 0.23)', color: 'rgba(0, 0, 0, 0.87)' }}
            >
              Sign up with Google
            </Button>
          </Link>
        </div>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
