import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import HeaderNavbarClient from "./HeaderNavbarClient";

// Server component: static header layout

export default async function HeaderNavbar() {
  // const res = await fetch("https://fakestoreapi.com/products/categories"); // removed unused

  return (
    <>
      {/* Top Bar */}
      <Box sx={{ width: '100%', bgcolor: 'grey.100', px: 2, py: 0.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 14 }}>
        <Box sx={{ color: 'primary.main' }}>Summer Sale! 10% Off & Free Express Delivery</Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <select style={{ padding: '2px 8px', borderRadius: 4 }}>
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
          <Button color="primary" size="small" href="#shop">Shop</Button>
        </Box>
      </Box>
      {/* Main Navigation (client-side interactivity) */}
      <HeaderNavbarClient />
    </>
  );
}
