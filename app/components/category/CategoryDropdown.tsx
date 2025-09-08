// CategoryDropdown component with nested subcategories
"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

export default function CategoryDropdown({ onSelect }: { onSelect?: (path: string[]) => void }) {
  const [categories, setCategories] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const handleChange = (event: any) => {
    setSelected(event.target.value);
    if (onSelect) onSelect([event.target.value]);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Browse Categories
      </Typography>
      <Box sx={{ minWidth: 180, mb: 2 }}>
        <FormControl fullWidth size="small">
          <InputLabel>Category</InputLabel>
          <Select value={selected} label="Category" onChange={handleChange}>
            {categories.map(cat => (
              <MenuItem key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
