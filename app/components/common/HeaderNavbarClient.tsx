"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CartDrawer from "../cart/CartDrawer";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";

export default function HeaderNavbarClient() {
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <AppBar position="static" color="transparent" sx={{bgcolor:"F5F5F5" , color:"black"}} elevation={2}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Exclusive
          </Typography>
          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
            <Button color="inherit" href="/">Home</Button>
            <Button color="inherit" href="/contact">Contact</Button>
            <Button color="inherit" href="/about">About</Button>
            <Button color="inherit" href="/signup" sx={{ whiteSpace: 'nowrap' }}>Sign Up</Button>
            <SearchBar/>
            <CartDrawer />
            <IconButton color="inherit" ref={anchorRef} onClick={() => setUserMenuOpen((open) => !open)}>
              <AccountCircle />
            </IconButton>
            {/* User Dropdown */}
            {userMenuOpen && (
              <Box sx={{ position: 'absolute', top: 56, right: 24, bgcolor: 'background.paper', boxShadow: 3, borderRadius: 1, minWidth: 160, zIndex: 10 }}>
                <Button fullWidth color="inherit" href="/profile">My Profile</Button>
                <Button fullWidth color="inherit" href="/orders">My Orders</Button>
                <Button fullWidth color="inherit" href="/logout">Logout</Button>
              </Box>
            )}
          </Box>
          {/* Mobile Hamburger */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, p: 2 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/contact">Contact</Button>
          <Button color="inherit" href="/about">About</Button>
          <Button color="inherit" href="/signup">Sign Up</Button>
          <Box sx={{ my: 2 }}>
            <SearchBar/>
          </Box>
          <CartDrawer />
          <Button color="inherit" href="/profile">My Profile</Button>
          <Button color="inherit" href="/orders">My Orders</Button>
          <Button color="inherit" href="/logout">Logout</Button>
        </Box>
      </Drawer>
    </>
  );
}
