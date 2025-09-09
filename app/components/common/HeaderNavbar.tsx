// Reusable Header/Navbar component for e-commerce
"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import CartDrawer from "../cart/CartDrawer";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";

export default function HeaderNavbar() {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          E-Commerce
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Shop</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
          <SearchBar/>
          <CartDrawer />
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
// After Product Card, you’ll likely want:

// Product List/Grid (uses Product Card)
// Category/Filter Bar
// Cart Icon/Drawer
// Footer
