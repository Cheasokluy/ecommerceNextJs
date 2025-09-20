
import React from "react";
import { Product } from "@/types/Product";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddToCartButton from "./AddToCartButton";



async function getTopProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
  const products: Product[] = await res.json();
  // Sort by rating (highest first) and take top 5
  return products.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 5);
}

interface HomeProductListProps {
  onViewAll?: () => void;
}

export default async function HomeProductList({ onViewAll }: HomeProductListProps) {
  const products: Product[] = await getTopProducts();

  return (
    <Box py={6}>
      <Typography variant="h4" gutterBottom align="center">
        Top Sale today
      </Typography>
      <Box display="flex" flexWrap="nowrap" justifyContent="center" gap={3}>
        {products.map((product: Product) => (
          <Box key={product.id} sx={{ minWidth: 250, maxWidth: 300, flex: "0 0 250px", display: "flex", justifyContent: "center" }}>
            <Card sx={{ width: "100%", boxShadow: 3, borderRadius: 3, height: "100%" }}>
              <CardMedia
                component="img"
                height="180"
                image={Array.isArray(product.image) ? product.image[0] : product.image}
                alt={product.title}
                sx={{ objectFit: "contain", p: 2, background: "#fafafa" }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom noWrap>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom noWrap>
                  {product.category_id}
                </Typography>
                <Typography variant="subtitle1" color="primary" fontWeight={700}>
                  ${product.price}
                </Typography>
                <Box display="flex" justifyContent="center" mt={2}>
                  <AddToCartButton product={product} />
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
      <Box display="flex" justifyContent="center" mt={4}>
        <Button variant="contained" color="error" size="large" onClick={onViewAll}>View All Products</Button>
      </Box>
    </Box>
  );
}
