import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Image2 from "../Asset/Image2.jfif";
import Image3 from "../Asset/Image3.jpg";
import Appointment from "../Page/Appointment";

const cardStyle = {
  width: "300px", // Fixed width for all cards
  margin: "0 auto", // Center horizontally
  marginBottom: "20px", // Add margin between cards
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center", // Center the cards horizontally
  gap: "20px",
  marginTop: "20px",
};

const PricingCard = ({ imageSrc, heading, price }) => {
  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        height="200"
        width="300"
        image={imageSrc}
        alt={heading}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
          {heading}
        </Typography>
        <Typography variant="h6" color="text.secondary" style={{ textAlign: "center" }}>
          Price: ${price}
        </Typography>
        <Link to="/Book" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundImage: "linear-gradient(to right, #4CAF50, #8BC34A)",
              color: "white",
              justifyContent: "center",
              alignItems: "center",
              padding: "6px 12px",
              fontSize: "12px",
              margin: "0 auto",
              display: "flex",
              "&:hover": {
                backgroundImage: "linear-gradient(to right, #8BC34A, #4CAF50)",
                color: "black",
              },
            }}
          >
            Book Your Slot
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

const PricingCards = () => {
  const pricingData = [
    {
      imageSrc: Image2,
      heading: "Basic Plan",
      price: 19.99,
    },
    {
      imageSrc: Image2,
      heading: "Standard Plan",
      price: 39.99,
    },
    {
      imageSrc: Image3,
      heading: "Premium Plan",
      price: 59.99,
    },
    {
      imageSrc: Image2,
      heading: "Pro Plan",
      price: 79.99,
    },
    {
      imageSrc: Image3,
      heading: "Enterprise Plan",
      price: 99.99,
    },
    {
      imageSrc: Image2,
      heading: "Custom Plan",
      price: 129.99,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <div style={containerStyle}>
        {pricingData.map((data, index) => (
          <div key={index} data-aos="fade-up">
            <PricingCard
              imageSrc={data.imageSrc}
              heading={data.heading}
              price={data.price}
            />
          </div>
        ))}
      </div>
      <Appointment />
    </div>
  );
};

export default PricingCards;
