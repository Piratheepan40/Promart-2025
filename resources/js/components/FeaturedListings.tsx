import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Button,
  MenuItem,
  Select,
  Rating,
  SelectChangeEvent,
} from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import { motion, type Variants } from "framer-motion";
import { Link } from "@inertiajs/react";

type Listing = {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  city: string;
  province: string;
  createdAt: string; // ISO date
  logo?: string; // optional
};

const listings: Listing[] = [
  {
    id: 1,
    name: "IDEAL Pvt Ltd",
    category: "General Construction",
    rating: 4.8,
    reviews: 142,
    description:
      "Leading construction company specializing in residential and commercial projects with over 15 years of experience.",
    city: "Colombo",
    province: "Western Province",
    createdAt: "2023-11-01",
  },
  {
    id: 2,
    name: "NES",
    category: "Engineering Services",
    rating: 4.9,
    reviews: 98,
    description:
      "Expert engineering consultancy providing structural, electrical, and mechanical engineering services.",
    city: "Jaffna",
    province: "Northern Province",
    createdAt: "2024-01-15",
    logo: "/NES.jpeg",
  },
  {
    id: 3,
    name: "Akshaya Construction",
    category: "Sustainable Construction",
    rating: 4.7,
    reviews: 76,
    description:
      "Sustainable construction solutions with focus on eco-friendly materials and green building practices.",
    city: "Galle",
    province: "Southern Province",
    createdAt: "2024-05-10",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
  hover: {
    rotateX: -6,
    rotateY: 6,
    scale: 1.05,
    boxShadow: "0 35px 50px rgba(0,0,0,0.3)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export default function FeaturedListings() {
  const provinces = [
    "Northern Province",
    "Eastern Province",
    "North Central Province",
    "North Western Province",
    "Central Province",
    "Western Province",
    "Southern Province",
    "Sabaragamuwa Province",
    "Uva Province",
  ];

  const sortOptions = ["Most Popular", "Most Recent", "Highest Rated"];

  const [province, setProvince] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  const onProvinceChange = (e: SelectChangeEvent<string>) =>
    setProvince(e.target.value);
  const onSortChange = (e: SelectChangeEvent<string>) => setSortBy(e.target.value);

  const filteredListings = useMemo(() => {
    let result = [...listings];
    if (province) result = result.filter((l) => l.province === province);

    if (sortBy === "Most Popular") {
      result.sort((a, b) => b.reviews - a.reviews);
    } else if (sortBy === "Highest Rated") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "Most Recent") {
      result.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
    }
    return result;
  }, [province, sortBy]);

  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 6 },
        textAlign: "center",
        background: "linear-gradient(180deg, #cce7ff 0%, #f7fbff 100%)", // light blue gradient
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "var(--primary)", letterSpacing: "0.05em" }}
      >
        Featured <Box component="span" sx={{ color: "var(--primaryDark)" }}>
          Listings
        </Box>
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        mb={6}
        sx={{ maxWidth: 600, mx: "auto", fontSize: 18, fontWeight: 500 }}
      >
        Find top construction & engineering experts in Sri Lanka.      </Typography>

      {/* Filters */}
      <Box
        display="flex"
        justifyContent="center"
        gap={3}
        mb={6}
        flexWrap="wrap"
        sx={{ maxWidth: 650, mx: "auto" }}
      >
        <Select
          value={province}
          onChange={onProvinceChange}
          displayEmpty
          sx={{
            minWidth: 210,
            backgroundColor: "white",
            color: "var(--foreground)",
            borderRadius: 2,
            "& fieldset": { borderColor: "var(--border)" },
            boxShadow: "0 4px 12px rgb(0 0 0 / 0.07)",
            fontWeight: 600,
          }}
          renderValue={(v) => (v ? String(v) : "Select Province")}
        >
          <MenuItem value="">Select Province</MenuItem>
          {provinces.map((prov) => (
            <MenuItem key={prov} value={prov}>
              {prov}
            </MenuItem>
          ))}
        </Select>

        <Select
          value={sortBy}
          onChange={onSortChange}
          displayEmpty
          sx={{
            minWidth: 210,
            backgroundColor: "white",
            color: "var(--foreground)",
            borderRadius: 2,
            "& fieldset": { borderColor: "var(--border)" },
            boxShadow: "0 4px 12px rgb(0 0 0 / 0.07)",
            fontWeight: 600,
          }}
          renderValue={(v) => (v ? String(v) : "Sort By")}
        >
          <MenuItem value="">Sort By</MenuItem>
          {sortOptions.map((opt) => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Listings */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 24,
          perspective: 1300,
        }}
      >
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <motion.div
              key={listing.id}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              whileHover="hover"
              style={{
                background: "white",
                borderRadius: 24,
                padding: 24,
                width: 320,
                minHeight: 340,
                boxShadow: "0 12px 28px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transformStyle: "preserve-3d",
                border: "1px solid #e1e8f7",
                color: "var(--foreground)",
              }}
            >
              {/* Logo */}
              {listing.logo && (
                <Box
                  component="img"
                  src={listing.logo}
                  alt={`${listing.name} logo`}
                  sx={{
                    width: 72,
                    height: 72,
                    objectFit: "contain",
                    borderRadius: 3,
                    mb: 3,
                    mx: "auto",
                    display: "block",
                    border: "1px solid #e1e8f7",
                    backgroundColor: "#f9fbff",
                  }}
                />
              )}

              <div>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ letterSpacing: "0.02em" }}
                >
                  {listing.name}
                </Typography>
                <Typography
                  variant="caption"
                  color="primary"
                  display="block"
                  mb={1}
                  sx={{ fontWeight: 600, letterSpacing: "0.04em" }}
                >
                  {listing.category}
                </Typography>
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <Rating
                    value={listing.rating}
                    precision={0.1}
                    readOnly
                    size="small"
                    sx={{ color: "var(--primary)" }}
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                    ({listing.reviews} reviews)
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mb={2}
                  sx={{ lineHeight: 1.6 }}
                >
                  {listing.description}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={0.5}
                  color="text.secondary"
                  mb={2}
                >
                  <RoomIcon fontSize="small" />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {listing.city}, {listing.province}
                  </Typography>
                </Box>
              </div>

              <Button
                component={Link}
                href={`/listings/${listing.id}`}
                variant="outlined"
                fullWidth
                sx={{
                  mt: 2,
                  borderRadius: 5,
                  textTransform: "none",
                  fontWeight: 700,
                  color: "var(--primary)",
                  borderColor: "var(--primary)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(0, 123, 255, 0.1)",
                    borderColor: "var(--primaryDark)",
                    boxShadow: "0 4px 15px rgba(0, 123, 255, 0.3)",
                    color: "var(--primaryDark)",
                  },
                }}
                aria-label={`View details for ${listing.name}`}
              >
                View Details →
              </Button>
            </motion.div>
          ))
        ) : (
          <Typography variant="body1" color="text.secondary" sx={{ mt: 4 }}>
            No listings found.
          </Typography>
        )}
      </motion.div>

      {/* View All Button */}
      <Button
        component={Link}
        href="/listings"
        variant="contained"
        sx={{
          mt: 8,
          borderRadius: 5,
          px: 6,
          py: 1.5,
          fontWeight: 700,
          boxShadow: "0 10px 30px rgba(0, 123, 255, 0.35)",
          backgroundColor: "var(--primary)",
          "&:hover": {
            backgroundColor: "var(--primaryDark)",
            boxShadow: "0 14px 40px rgba(0, 90, 204, 0.5)",
          },
        }}
      >
        View All Listings
      </Button>
    </Box>
  );
}
