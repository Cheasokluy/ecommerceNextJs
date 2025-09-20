import React from "react";
import { Product } from "@/types/Product";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddToCartButton from "./AddToCartButton";
import PaginationControls from "./PaginationControls";

const PRODUCTS_PER_PAGE = 20;

async function getAllProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
  return await res.json();
}

export default async function ProductList({ page = 1 }: { page?: number }) {
  const products: Product[] = await getAllProducts();
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const pageProducts = products.slice(start, start + PRODUCTS_PER_PAGE);

  return (
    <Box py={6}>
      <Typography variant="h4" gutterBottom align="center">
        All Products
      </Typography>
      <Box display="grid" gridTemplateColumns={{ xs: "repeat(2, 1fr)", md: "repeat(5, 1fr)" }} gap={3}>
        {pageProducts.map((product: Product) => (
          <Card key={product.id} sx={{ boxShadow: 3, borderRadius: 3, height: "100%" }}>
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
                Category ID: {product.category_id}
              </Typography>
              <Typography variant="subtitle1" color="primary" fontWeight={700}>
                ${product.price}
              </Typography>
              <Box display="flex" justifyContent="center" mt={2}>
                <AddToCartButton product={product} />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      <PaginationControls page={page} totalPages={totalPages} />
    </Box>
  );
}