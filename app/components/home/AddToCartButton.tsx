"use client";
import { Button } from "@mui/material";
import { useCart } from "../../store/CartContext";
import { Product } from "@/types/Product";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: typeof product.image === "string" ? product.image : product.image[0],
      quantity: 1
    });
  };

  return (
    <Button size="small" variant="contained" onClick={handleAdd}>
      Add to Cart
    </Button>
  );
}
