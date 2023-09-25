import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image4 from "../Asset/Image1.jpg";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AOS from "aos";
import Info from "../Page/sucess";
import "aos/dist/aos.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language"; // Add LanguageIcon

const About = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div data-aos="fade-up-right">
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <img
              src={Image4}
              alt="Healthy Food"
              style={{
                width: "80%",
                // height:"80%",
                height: isSmScreen ? "auto" : "95%",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                p: "2rem",
                textAlign: "left",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1" paragraph>
                We are a team of nutrition experts dedicated to helping you
                achieve a healthier lifestyle through proper diet and nutrition.
                Our mission is to provide you with the knowledge and tools to
                make informed choices about your diet, so you can live your best
                life.
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center", // Center horizontally
                //   height: "100%", // Center vertically
                }}
              >
                {/* Add margin to create a gap between the icons */}
                <LanguageIcon
                  onClick={() =>
                    window.open("https://www.google.com/")
                  }
                  style={{
                    cursor: "pointer",
                    color: "red",
                    margin: "0 10px", // Add margin to create space between icons
                  }}
                />
                <TwitterIcon
                  onClick={() =>
                    window.open("https://twitter.com/YourTwitterUsername")
                  }
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    margin: "0 10px", // Add margin to create space between icons
                  }}
                />
                <InstagramIcon
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/your_instagram_account"
                    )
                  }
                  style={{
                    cursor: "pointer",
                    color: "purple",
                    margin: "0 10px", // Add margin to create space between icons
                  }}
                />
                <FacebookIcon
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/your_facebook_account"
                    )
                  }
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    margin: "0 10px", // Add margin to create space between icons
                  }}
                />
                <PhoneIcon
                  style={{
                    cursor: "pointer",
                    color: "green",
                    margin: "0 10px", // Add margin to create space between icons
                  }}
                />
              </div>
              {!showFullText && (
                <button
                  onClick={toggleText}
                  style={{
                    cursor: "pointer",
                    border: "none",
                    background: "none",
                    color: theme.palette.primary.main,
                    marginTop: "1rem",
                  }}
                >
                  Read More &#x25BC;
                </button>
              )}
              {showFullText && (
                <div>
                  <ul style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <li style={{ listStyleType: "disc" }}>
                      Led by a certified dietitian Kiran Kukreja.
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      It provides you with personalized and convenient diet
                      plans that are easy to follow.
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      It helps you improve your health by reversing diseases
                      through a proper and convenient diet and natural lifestyle
                      changes.
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Helped 300+ clients.
                    </li>
                  </ul>
                  <button
                    onClick={toggleText}
                    style={{
                      cursor: "pointer",
                      border: "none",
                      background: "none",
                      color: theme.palette.secondary.main,
                      marginTop: "1rem",
                    }}
                  >
                    Show Less &#x25B2;
                  </button>
                </div>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Info />
    </div>
    
  );
};

export default About;
