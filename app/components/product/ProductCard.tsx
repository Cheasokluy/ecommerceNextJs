// Reusable ProductCard component for e-commerce
"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category?: string;
  description?: string;
};

export default function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart?: (product: Product) => void }) {
  return (
    <Card sx={{ width: 280, boxShadow: 3, borderRadius: 3, height: "100%" }}>
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "contain", p: 2, background: "#fafafa" }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom noWrap>
          {product.title}
        </Typography>
        {product.category && (
          <Typography variant="body2" color="text.secondary" gutterBottom noWrap>
            {product.category}
          </Typography>
        )}
        <Typography variant="subtitle1" color="primary" fontWeight={700}>
          ${product.price}
        </Typography>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button size="small" variant="contained" onClick={() => onAddToCart?.(product)}>
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
