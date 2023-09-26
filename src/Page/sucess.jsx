import React, { useEffect, useRef } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pricing from './Pricing';

const rowStyle = {
  background: 'linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(95, 204, 39, 0.98) 100%)', // Linear gradient background
  color: 'white',
  padding: '20px',
};

const colStyle = {
  textAlign: 'center',
  padding: '0 20px', // Add some padding to separate the text and numbers
};

const InfoRow = () => {
  const animateText = (element) => {
    element.style.animation = 'slideUp 1s ease forwards';
    element.style.opacity = '1';
  };

  const rowRef = useRef(null);

  useEffect(() => {
    const rowElement = rowRef.current;

    const handleScroll = () => {
      const rect = rowElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.75) {
        // Trigger animation when the element is 75% visible
        const elementsToAnimate = rowElement.querySelectorAll('.animate-text');
        elementsToAnimate.forEach((element, index) => {
          setTimeout(() => animateText(element), index * 20); // Delay the animations
        });

        // Remove the scroll listener once animations are triggered
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={rowRef}>
      <Paper elevation={2} style={rowStyle}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={4} style={{ ...colStyle }}>
            <div className="animate-text" style={{ opacity: 0 }}>
              <Typography variant="h5">Satisfied Customers</Typography>
            </div>
            <div className="animate-text" style={{ opacity: 0 }}>
              <Typography variant="h4">300+</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} style={{ ...colStyle }}>
            <div className="animate-text" style={{ opacity: 0 }}>
              <Typography variant="h5">Success Rate</Typography>
            </div>
            <div className="animate-text" style={{ opacity: 0 }}>
              <Typography variant="h4">99%</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} style={colStyle}>
            <div className="animate-text" style={{ opacity: 0 }}>
              <Typography variant="h5">Countries Served</Typography>
            </div>
            <div className="animate-text" style={{ opacity: 0 }}>
              <Typography variant="h4">12+</Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <style>
        {`
          @keyframes slideUp {
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
      <Pricing />
    </div>
  );
};

export default InfoRow;
