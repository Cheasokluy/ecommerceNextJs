// Hero section for homepage
"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


// Manually selected featured product (example)
const featuredProduct = {
  id: 1,
  name: "iPhone 14 Pro Max",
  description: "Up to 10% off Voucher. Get the latest iPhone 14 Series with exclusive deals.",
  price: 1099,
  image: ["/image/hero-banner.png"], // Place your image in public folder and use "/image1.png"
  cta: "Shop Now",
  link: "/product/1"
};

export default function HomeHero() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      justifyContent: "space-between",
      bgcolor: "#fff",
      p: 4,
      backgroundColor:'black',
      borderRadius: 3,
      boxShadow: 2,
      minHeight: { xs: 300, md: 400 },
      mb: 4
    }}>
      <Box sx={{ flex: 1, pr: { md: 6 }, mb: { xs: 2, md: 0 } }}>
        <Typography variant="h3" fontWeight={700} mb={2} color="primary.main">
          {featuredProduct.description}
        </Typography>
        <Typography variant="h4" fontWeight={600} mb={2} color="text.secondary">
          {featuredProduct.name}
        </Typography>
        <Typography variant="h5" color="primary" mb={2}>
          ${featuredProduct.price}
        </Typography>
        <Button variant="contained" color="primary" size="large" href={featuredProduct.link}>
          {featuredProduct.cta}
        </Button>
      </Box>
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <img src={featuredProduct.image[0]} alt={featuredProduct.name} style={{ maxWidth: "100%", maxHeight: 350, borderRadius: 16, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }} />
      </Box>
    </Box>
  );
}
