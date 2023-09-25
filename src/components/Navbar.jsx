import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundImage: "linear-gradient(to right, #4CAF50, #8BC34A)",
        height: "60px",
        width: "100%",
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "white" }}
        >
          Nutrition
        </Typography>

        {/* Conditional rendering of Navigation Buttons */}
        {isMobile ? ( // Render on mobile
          <IconButton color="inherit" edge="end" onClick={toggleMobileMenu}>
            <MenuIcon />
          </IconButton>
        ) : (
          // Render on larger screens
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Button
              color="inherit"
              component={Link}
              to="/Login"
              sx={{
                backgroundColor: "transparent",
                border: "1px solid white",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  color: "black",
                },
              }}
            >
              Login
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/Register"
              sx={{
                backgroundColor: "transparent",
                border: "1px solid white",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  color: "black",
                },
              }}
            >
              Register
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/Book"
              sx={{
                background:
                  "linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(12, 240, 96, 0.9837) 100%)",
                border: "1px solid white",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  color: "black",
                },
              }}
            >
              Book A Demo
            </Button>
          </Box>
        )}
      </Toolbar>

      {/* Mobile Menu */}
      <Drawer anchor="right" open={isMobileMenuOpen} onClose={toggleMobileMenu}>
        <Box
          sx={{
            width: 200, // Adjust the width as needed
            paddingTop: "20px", // Add space at the top
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Mobile Menu Buttons */}
          <Button
            color="inherit"
            component={Link}
            to="/Login"
            sx={{
              width: "100%",
              margin: "5px 0",
              backgroundColor: "transparent",
              border: "1px solid white",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                color: "black",
              },
            }}
          >
            Login
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/Register"
            sx={{
              width: "100%",
              margin: "5px 0",
              backgroundColor: "transparent",
              border: "1px solid white",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                color: "black",
              },
            }}
          >
            Register
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/Book"
            sx={{
              width: "100%",
              margin: "5px 0",
              backgroundColor: "transparent",
              border: "1px solid white",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                color: "black",
              },
            }}
          >
            Book A Demo
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
