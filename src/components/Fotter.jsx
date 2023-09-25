import React from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
} from "@mui/material";

const bottomSectionStyle = {
  background: "linear-gradient(to right, #4CAF50, #8BC34A)", // Gradient background
  color: "white",
  padding: "20px",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const textLeftStyle = {
  marginLeft: "20px", // Adjust the margin as needed
};

const textRightStyle = {
  marginRight: "20px", // Adjust the margin as needed
};

const BottomSection = () => {
  return (
    <Paper elevation={0} style={{ width: "100%", background: "inherit", marginTop:"10px" }}>
      <div style={bottomSectionStyle}>
        <Typography variant="body1" style={textLeftStyle}>
          Privacy Policy
        </Typography>
        <Typography variant="body1" style={textLeftStyle}>
          Terms & Conditions
        </Typography>
        <Typography variant="body2" style={textRightStyle}>
          Powered by Exly and Any Private Limited
        </Typography>
      </div>
    </Paper>
  );
};

const Footer = () => {
  return (
    <div style={{ background: "inherit" }}>
      {/* Bottom Section */}
      <BottomSection />
    </div>
  );
};

export default Footer;
