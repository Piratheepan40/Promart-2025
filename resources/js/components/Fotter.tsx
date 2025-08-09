import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Link as MUILink,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "@inertiajs/react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #1565c0 0%, #003c8f 100%)", // Blue gradient
        color: "rgba(255,255,255,0.95)",
        py: 6,
        px: { xs: 3, md: 8 },
      }}
    >
      <Grid container spacing={5}>
        {/* Brand */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, mb: 2, color: "#90caf9" }} // lighter blue for brand
          >
            ProMart Sri Lanka
          </Typography>
          <Typography sx={{ mb: 2, color: "rgba(255,255,255,0.85)" }}>
            Your trusted platform for connecting with skilled construction and
            engineering professionals across Sri Lanka.
          </Typography>
          <Typography sx={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>
            📍 No. 123, Business District, Colombo 03
          </Typography>
          <MUILink
            href="mailto:info@promart.lk"
            sx={{
              display: "block",
              mt: 1,
              color: "#bbdefb",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            📧 info@promart.lk
          </MUILink>
          <MUILink
            href="tel:+94112345678"
            sx={{
              display: "block",
              color: "#bbdefb",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            📞 +94 11 234 5678
          </MUILink>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#90caf9" }}>
            Quick Links
          </Typography>
          {[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: "News", href: "/news" },
            { label: "Contact", href: "/contact" },
            { label: "Privacy Policy", href: "/legal/privacy" },
          ].map((link) => (
            <Typography
              key={link.label}
              component={Link}
              href={link.href}
              sx={{
                display: "block",
                mb: 1,
                fontSize: 14,
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                "&:hover": { color: "#bbdefb" },
                cursor: "pointer",
              }}
            >
              {link.label}
            </Typography>
          ))}
        </Grid>

        {/* Provinces */}
        <Grid item xs={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#90caf9" }}>
            Provinces
          </Typography>
          {[
            "Western",
            "Central",
            "Southern",
            "Northern",
            "Eastern",
            "North Western",
          ].map((p) => (
            <Typography
              key={p}
              sx={{
                mb: 1,
                fontSize: 14,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {p} Province
            </Typography>
          ))}
        </Grid>

        {/* Social & Hours */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#90caf9" }}>
            Stay Connected
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
            {[
              { I: Facebook, href: "https://facebook.com" },
              { I: Instagram, href: "https://instagram.com" },
              { I: LinkedIn, href: "https://linkedin.com" },
            ].map(({ I, href }) => (
              <IconButton
                key={href}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "rgba(255,255,255,0.15)",
                  color: "#bbdefb",
                  backdropFilter: "blur(6px)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    bgcolor: "rgba(255,255,255,0.3)",
                  },
                }}
                aria-label={`Link to ${href}`}
              >
                <I fontSize="small" />
              </IconButton>
            ))}
          </Box>
          <Box
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              p: 2,
              borderRadius: 2,
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <Typography sx={{ fontWeight: 600, mb: 1, color: "#bbdefb" }}>
              Business Hours
            </Typography>
            <Typography sx={{ fontSize: 14, color: "rgba(255,255,255,0.85)" }}>
              Mon–Fri: 8:00 AM – 6:00 PM
            </Typography>
            <Typography sx={{ fontSize: 14, color: "rgba(255,255,255,0.85)" }}>
              Sat: 9:00 AM – 3:00 PM
            </Typography>
            <Typography sx={{ fontSize: 14, color: "rgba(255,255,255,0.85)" }}>
              Sun: Closed
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Bar */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          mt: 5,
          pt: 3,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          fontSize: 13,
          color: "rgba(255,255,255,0.85)",
        }}
      >
        <Typography>© {year} ProMart Sri Lanka. All rights reserved.</Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          {[
            { label: "Privacy Policy", href: "/legal/privacy" },
            { label: "Terms of Service", href: "/legal/terms" },
            { label: "Cookie Policy", href: "/legal/cookies" },
          ].map((link) => (
            <MUILink
              key={link.label}
              component={Link}
              href={link.href}
              sx={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                "&:hover": { color: "#bbdefb" },
                cursor: "pointer",
              }}
            >
              {link.label}
            </MUILink>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
