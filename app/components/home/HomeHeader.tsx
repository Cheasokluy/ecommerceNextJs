// Common header for the homepage
"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function HomeHeader() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          E-Commerce
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
}
