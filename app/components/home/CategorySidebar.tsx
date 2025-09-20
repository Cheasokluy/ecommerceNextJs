import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty"
];

export default function CategorySidebar() {
  return (
    <Box sx={{
      width: 220,
      bgcolor: "#fff",
      borderRadius: 2,
      boxShadow: 1,
      p: 2,
      display: { xs: "none", md: "block" }
    }}>
      {categories.map((cat) => (
        <Button key={cat} sx={{ justifyContent: "flex-start", width: "100%", color: "#222", mb: 1 }}>
          {cat}
        </Button>
      ))}
    </Box>
  );
}
