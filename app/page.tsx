"use client";
import CartDrawer from "./components/cart/CartDrawer";
import CategoryFilter from "./components/category/CategoryFilter";
import CategoryMenu from "./components/category/CategoryMenu";
import CategorySelector from "./components/category/CategorySelector";
import HeaderNavbar from "./components/common/HeaderNavbar";
import HomeHeader from "./components/home/HomeHeader";
import HomeHero from "./components/home/HomeHero";
import HomeProductList from "./components/home/HomeProductList";
import ProductCard, { Product } from "./components/product/ProductCard";
import ProductList from "./components/product/ProductList";

import { useState } from "react";
import { useCart } from "./store/CartContext";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const { addToCart } = useCart();

  return (
    <>
      <HeaderNavbar/>
      <CartDrawer />
      <CategoryMenu onSelect={path => setSelectedCategory(path[path.length-1]?.name?.toLowerCase())} />
      <ProductList category={selectedCategory} onAddToCart={product => addToCart({ ...product, quantity: 1 })} />
    </>
  );
}
