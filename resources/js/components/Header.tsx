import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@inertiajs/react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Listings", href: "/listings" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        pt: 3,
      }}
    >
      {/* Drawer Logo */}
      <Box sx={{ mb: 3 }}>
        <img
          src="/promart logo.png"
          alt="ProMart Logo"
          style={{ height: 65, objectFit: "contain" }}
        />
      </Box>

      {/* Drawer Nav */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              sx={{
                textAlign: "center",
                py: 1.2,
                "&:hover": { backgroundColor: "#f0f4ff" },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        {/* Login/Register Mobile */}
        <ListItem disablePadding>
          <ListItemButton component={Link} href="/login">
            <Typography sx={{ fontWeight: 500 }}>Login</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href="/register"
            sx={{
              bgcolor: "#007BFF",
              color: "#fff",
              borderRadius: 2,
              my: 1,
              mx: 3,
              py: 1.2,
              "&:hover": { bgcolor: "#0056b3" },
            }}
          >
            Register
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            px: { xs: 2, md: 6 },
            minHeight: 90,
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href="/">
              <img
                src="/promart logo.png"
                alt="ProMart Logo"
                style={{
                  height: 70,
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Link>
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                sx={{
                  color: "#000",
                  fontWeight: 500,
                  fontSize: "1rem",
                  textTransform: "none",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "#007BFF",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Desktop Auth Buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button
              component={Link}
              href="/login"
              variant="outlined"
              sx={{
                color: "#007BFF",
                borderColor: "#BBD7FF",
                borderRadius: 2,
                px: 3,
                textTransform: "none",
                fontWeight: 500,
              }}
            >
              Login
            </Button>
            <Button
              component={Link}
              href="/register"
              variant="contained"
              sx={{
                bgcolor: "#007BFF",
                "&:hover": { bgcolor: "#0056b3" },
                borderRadius: 2,
                px: 3,
                textTransform: "none",
                fontWeight: 500,
              }}
            >
              Register
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="start"
            sx={{ display: { md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "75%",
            maxWidth: 320,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
