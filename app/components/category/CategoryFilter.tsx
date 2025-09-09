// Reusable CategoryFilter component for e-commerce
"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export type Category = {
  id: number;
  name: string;
};

export default function CategoryFilter({ onSelect }: { onSelect?: (category: string) => void }) {
  const [categories, setCategories] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const handleSelect = (category: string) => {
    setSelected(category);
    if (onSelect) onSelect(category);
  };

  return (
    <Box py={2} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6" gutterBottom>
        Categories
      </Typography>
      <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selected === cat ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleSelect(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
