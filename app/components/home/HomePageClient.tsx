"use client";
import { useState } from "react";
import { useCart } from "../../store/CartContext";
import { Box, Button } from "@mui/material";
import HomeProductList from "./HomeProductList";
import ProductList from "./ProductList";

export default function HomePageClient() {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [page] = useState(1);
  const { addToCart } = useCart();

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, mb: 4 }}>
      {!showAllProducts ? (
        <HomeProductList onViewAll={() => setShowAllProducts(true)} />
      ) : (
        <>
          <Button variant="outlined" sx={{ mb: 2 }} onClick={() => setShowAllProducts(false)}>
            Back to Featured
          </Button>
          <ProductList page={page} />
        </>
      )}
    </Box>
  );
}

