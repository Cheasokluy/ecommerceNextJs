"use client";
import CartDrawer from "./components/cart/CartDrawer";
import CategoryMenu from "./components/category/CategoryMenu";
import HeaderNavbar from "./components/common/HeaderNavbar";
import ProductList from "./components/product/ProductList";

import { useState } from "react";
import { useCart } from "./store/CartContext";
import HomeHero from "./components/home/HomeHero";
import { Box } from "@mui/material";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const { addToCart } = useCart();

  return (
    <>
      <HeaderNavbar/>
      {/* <CartDrawer /> */}
      <Box display="flex" justifyContent="space-between" flexDirection={{ xs: "column", md: "row" }} sx={{ my: 4}}>
        {/* <CategoryMenu onSelect={path => setSelectedCategory(path[path.length-1]?.name?.toLowerCase())}/> */}

        {/* <HomeHero /> */}
      </Box>
      
      {/* <ProductList category={selectedCategory} onAddToCart={product => addToCart({ ...product, quantity: 1 })} /> */}
    </>
  );
}
