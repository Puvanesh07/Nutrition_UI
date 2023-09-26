import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import About from "../Page/About";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'react-lottie'; // Import Lottie

// Import your Lottie animation JSON file
import animationData from "../Asset/animation.json"; // Replace with your animation JSON file path

const Home = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    let scrollListener;

    // Initialize AOS when the user starts scrolling down
    const handleScroll = () => {
      if (window.scrollY > 100) {
        AOS.init({ duration: 2000 });
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Add a scroll listener
    scrollListener = window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the scroll listener
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  // Lottie animation options
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // Use your animation JSON here
  };

  return (
    <div data-aos="fade-up">
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                p: '2rem',
                textAlign: 'center',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'transparent',
              }}
            >
              <Typography variant="h4" gutterBottom>
                Welcome to our Nutrition Website
              </Typography>
              <Typography variant="body1" paragraph>
                Discover the secrets of a healthy diet and lifestyle.
              </Typography>
              <Link to="/bookyourslot" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundImage: 'linear-gradient(to right, #4CAF50, #8BC34A)',
                    color: 'white',
                    padding: '6px 12px',
                    fontSize: '12px',
                    margin: '0 auto',
                    '&:hover': {
                      backgroundImage: 'linear-gradient(to right, #8BC34A, #4CAF50)',
                      color: 'black',
                    },
                  }}
                >
                  Book Your Slot
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Replace the image with Lottie animation */}
            <Lottie options={animationOptions} height={isSmScreen ? 'auto' : '100%'} width="100%" />
          </Grid>
        </Grid>
      </Container>

      <About />
    </div>
  );
};

export default Home;
