import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import GoogleIcon from '@mui/icons-material/Google';

const LoginPage = () => {
  return (
    <Container maxWidth="xs" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            sx={{
              mt: 2,
              background: 'linear-gradient(to right, #4CAF50, #8BC34A)',
              color: 'white',
              padding: '6px 12px',
              fontSize: '16px', // Adjust the font size as needed
              margin: '0 auto',
              '&:hover': {
                background: 'linear-gradient(to right, #8BC34A, #4CAF50)',
                color: 'black',
              },
            }}
          >
            Login
          </Button>
        </form>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Or login with
        </Typography>
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{ borderColor: 'rgba(0, 0, 0, 0.23)', color: 'rgba(0, 0, 0, 0.87)' }}
          >
            Google
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LoginPage;
