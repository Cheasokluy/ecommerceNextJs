// CategoryMenu component: menu list with dropdowns for subcategories
"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

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

function CategoryMenuList({ categories, onSelect, level = 0 }: { categories: CategoryNode[]; onSelect: (path: CategoryNode[]) => void; level?: number }) {
  const [openIds, setOpenIds] = useState<number[]>([]);

  const handleClick = (cat: CategoryNode, path: CategoryNode[]) => {
    if (cat.subcategories) {
      setOpenIds(ids => ids.includes(cat.id) ? ids.filter(id => id !== cat.id) : [...ids, cat.id]);
    } else {
      onSelect(path);
    }
  };

  return (
    <List component="nav" disablePadding sx={{ pl: level * 2 }}>
      {categories.map(cat => (
        <React.Fragment key={cat.id}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleClick(cat, [cat])}>
              <Typography variant="body1">{cat.name}</Typography>
              {cat.subcategories ? (openIds.includes(cat.id) ? <ExpandLess /> : <ExpandMore />) : null}
            </ListItemButton>
          </ListItem>
          {cat.subcategories && (
            <Collapse in={openIds.includes(cat.id)} timeout="auto" unmountOnExit>
              <CategoryMenuList categories={cat.subcategories} onSelect={subPath => onSelect([cat, ...subPath])} level={level + 1} />
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );
}

export default function CategoryMenu({ onSelect }: { onSelect?: (path: CategoryNode[]) => void }) {
  const categories = demoCategories; // Replace with API data when available

  const handleSelect = (path: CategoryNode[]) => {
    if (onSelect) onSelect(path);
  };

  return (
    <Box py={2}>
      <Typography variant="h6" gutterBottom>
        Categories
      </Typography>
      <CategoryMenuList categories={categories} onSelect={handleSelect} />
    </Box>
  );
}
