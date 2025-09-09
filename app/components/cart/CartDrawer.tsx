// Modern CartDrawer component for e-commerce
"use client";
import React, { useState } from "react";
import { useCart } from "../../store/CartContext";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export default function CartDrawer() {
  const [open, setOpen] = useState(false);
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert("Checkout not implemented yet!");
    clearCart();
    setOpen(false);
  };

  return (
    <>
      <IconButton color="inherit" onClick={() => setOpen(true)}>
        <Badge badgeContent={itemCount} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 350, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Shopping Cart
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {cartItems.length === 0 ? (
            <Typography color="text.secondary">Your cart is empty.</Typography>
          ) : (
            <>
              {cartItems.map(item => (
                <Box key={item.id} display="flex" alignItems="center" mb={2}>
                  <img src={item.image} alt={item.title} width={60} height={60} style={{ objectFit: "contain", marginRight: 12 }} />
                  <Box flex={1}>
                    <Typography variant="body1" noWrap>{item.title}</Typography>
                    <Box display="flex" alignItems="center">
                      <Button size="small" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                      <Typography variant="body2" color="text.secondary" mx={1}>{item.quantity}</Typography>
                      <Button size="small" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                      <Typography variant="body2" color="text.secondary" ml={2}>${item.price}</Typography>
                    </Box>
                  </Box>
                  <Button size="small" color="error" onClick={() => removeFromCart(item.id)}>Remove</Button>
                </Box>
              ))}
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle1" fontWeight={700} mb={2}>Total: ${total.toFixed(2)}</Typography>
              <Button variant="contained" color="primary" fullWidth onClick={handleCheckout}>Checkout</Button>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
}
