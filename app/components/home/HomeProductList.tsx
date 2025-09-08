// Product list section for homepage
"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export default function HomeProductList() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <Box py={6}>
      <Typography variant="h4" gutterBottom align="center">
        Featured Products
      </Typography>
      {loading ? (
        <Box display="flex" justifyContent="center" py={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
          {products.slice(0, 8).map((product) => (
            <Box key={product.id} sx={{ minWidth: 250, maxWidth: 300, flex: "1 1 250px", display: "flex", justifyContent: "center" }}>
              <Card sx={{ width: "100%", boxShadow: 3, borderRadius: 3, height: "100%" }}>
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
                  <Typography variant="body2" color="text.secondary" gutterBottom noWrap>
                    {product.category}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" fontWeight={700}>
                    ${product.price}
                  </Typography>
                  <Box display="flex" justifyContent="center" mt={2}>
                    <Button size="small" variant="contained">Add to Cart</Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
