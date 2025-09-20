// Reusable ProductList component for e-commerce
"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import ProductCard, { Product } from "../product/ProductCard";


export default function ProductList({ category, onAddToCart }: { category?: string; onAddToCart?: (product: Product) => void }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = category ? `https://fakestoreapi.com/products/category/${category}` : "https://fakestoreapi.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [category]);

  return (
    <Box py={6}>
      <Typography variant="h4" gutterBottom align="center">
        Products List
      </Typography>
      {loading ? (
        <Box display="flex" justifyContent="center" py={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
          {products.map((product) => (
            <Box key={product.id} sx={{ minWidth: 250, maxWidth: 300, flex: "1 1 250px", display: "flex", justifyContent: "center" }}>
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
