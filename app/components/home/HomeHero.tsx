// Hero section for homepage
"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function HomeHero() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" py={8}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Welcome to Our Store
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" mb={4}>
        Discover the best products at unbeatable prices
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Shop Now
      </Button>
    </Box>
  );
}
