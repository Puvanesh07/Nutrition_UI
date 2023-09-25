import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Testimonial from "../components/Test";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Image2 from "../Asset/Image2.jfif";
import AOS from "aos";
import "aos/dist/aos.css";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

const cardStyle = {
  maxWidth: "500px",
  width: "80%",
};

const imageSrc = Image2;

const AppointmentCallCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div>
    <div style={containerStyle} data-aos="fade-up-left">
      <Card sx={cardStyle}>
        <CardMedia
          component="img"
          height="400"
          image={imageSrc}
          alt="Appointment Call"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Appointment Call
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: $499
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/book"
            sx={{
              marginTop: 2,
              background: "linear-gradient(to right, #4CAF50, #8BC34A)",
              color: "white",
              alignItems: "center",
              padding: "6px",
              fontSize: "16px",
              display: "flex",
              justifyContent: "center", // Center horizontally
              "&:hover": {
                background: "linear-gradient(to right, #8BC34A, #4CAF50)",
                color: "black",
              },
            }}
          >
            Book a Slot
          </Button>
        </CardContent>
      </Card>
      
    </div>
    <Testimonial />
    </div>
  );
};

export default AppointmentCallCard;
