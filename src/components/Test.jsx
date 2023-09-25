import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  IconButton,
  Container,
  Slide,
  Box,
} from "@mui/material";
import Bottom from "../components/Fotter";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const testimonials = [
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Jane Smith",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  // Add more testimonials as needed
];

const TestimonialsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically slide to the next testimonial every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div>
      <div
        style={{
          background: "radial-gradient(circle, rgba(227,237,231,0.9725140056022409) 0%, rgba(183,185,179,1) 100%)", // Radial gradient background
          padding: "20px",
          minHeight: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow:"hidden",
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={3}
            style={{
              padding: "10px",
              backgroundColor: "transparent", // Make the background transparent
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              overflow: "hidden",
              width: "800px",
              height: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", // Center the icons vertically
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"; // Change back to transparent on mouse leave
            }}
          >
            <Slide direction="left" in={true}>
              <Typography variant="h5">
                {testimonials[activeIndex].text}
              </Typography>
            </Slide>
            <Typography
              variant="h6"
              style={{
                marginTop: "10px",
              }}
            >
              - {testimonials[activeIndex].name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center", // Center the icons horizontally
              }}
            >
              <IconButton onClick={handlePrev}>
                <ChevronLeft />
              </IconButton>
              <IconButton onClick={handleNext}>
                <ChevronRight />
              </IconButton>
            </Box>
          </Paper>
        </Container>
      </div>
      <Bottom />
    </div>
  );
};

export default TestimonialsSlider;
