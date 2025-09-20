// Unified CategorySelector component: dropdown on mobile, button group on desktop
"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

export type CategoryNode = {
  id: number;
  name: string;
  subcategories?: CategoryNode[];
};

// Example nested categories for demo (replace with API data when available)
const demoCategories: CategoryNode[] = [
  {
    id: 1,
    name: "Electronics",
    subcategories: [
      {
        id: 2,
        name: "Phones",
        subcategories: [
          { id: 3, name: "Smartphones" },
          { id: 4, name: "Feature Phones" },
        ],
      },
      { id: 5, name: "Laptops" },
    ],
  },
  {
    id: 6,
    name: "Clothing",
    subcategories: [
      { id: 7, name: "Men" },
      { id: 8, name: "Women" },
    ],
  },
  { id: 9, name: "Home" },
];

function NestedDropdown({ categories, onSelect, path = [] }: { categories: CategoryNode[]; onSelect: (path: CategoryNode[]) => void; path?: CategoryNode[] }) {
  const [selectedId, setSelectedId] = useState<string>("");
  const selectedCategory = categories.find(cat => String(cat.id) === selectedId);

  const handleChange = (event: SelectChangeEvent) => {
    const idStr = event.target.value;
    setSelectedId(idStr);
    const id = Number(idStr);
    const foundCategory = categories.find(cat => cat.id === id);
    if (foundCategory) {
      if (foundCategory.subcategories) {
        // Wait for subcategory selection
      } else {
        onSelect([...path, foundCategory]);
      }
    }
  };

  return (
    <Box sx={{ minWidth: 180, mb: 2 }}>
      <FormControl fullWidth size="small">
        <Select value={selectedId} label="Category" onChange={handleChange}>
          {categories.map(cat => (
            <MenuItem key={cat.id} value={String(cat.id)}>{cat.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedCategory && selectedCategory.subcategories && (
        <NestedDropdown categories={selectedCategory.subcategories} onSelect={onSelect} path={[...path, selectedCategory]} />
      )}
    </Box>
  );
}

export default function CategorySelector({ onSelect }: { onSelect?: (path: CategoryNode[]) => void }) {
  // Removed unused theme
  // Removed unused isMobile

  // Replace demoCategories with API data when available
  const categories = demoCategories;

  const handleSelect = (path: CategoryNode[]) => {
    if (onSelect) onSelect(path);
  };

  return (
    <Box py={2} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6" gutterBottom>
        Categories
      </Typography>
      <NestedDropdown categories={categories} onSelect={handleSelect} />
    </Box>
  );
}
