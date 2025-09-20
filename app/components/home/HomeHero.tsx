// Hero section for homepage
import React from "react";
import Box from "@mui/material/Box";
import CategorySidebar from "./CategorySidebar";
import ProductBanner from "./ProductBanner";


// Manually selected featured product (example)
const featuredProduct = {
  id: 1,
  name: "iPhone 14 Pro Max",
  description: "Up to 10% off Voucher. Get the latest iPhone 14 Series with exclusive deals.",
  price: 1099,
  image: ["/image/iphone14.jpg"], // Place your image in public folder and use "/image1.png"
  cta: "Shop Now",
  link: "/product/1"
};

export default function HomeHero() {
  return (
    <Box sx={{
      bgcolor: "transparent",
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      justifyContent: "space-around",
      minHeight: { xs: 300, md: 400 },
      mb: 4,
      gap: 3
    }}>
      <Box sx={{
        color: "#fff",
        borderRadius: 3,
        p: 4,
        px: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <CategorySidebar />
      </Box>
      {/* Banner */}
      <Box sx={{
        flex: 1,
        bgcolor: "#111",
        color: "#fff",
        borderRadius: 3,
        ml: 2,
        mr: 4,
        p: 4,
        px: 6,
        py: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: 320
      }}>
        <ProductBanner
          name={featuredProduct.name}
          description={featuredProduct.description}
          image={featuredProduct.image[0]}
          cta={featuredProduct.cta}
          link={featuredProduct.link}
        />
      </Box>
      {/* Product Image */}

    </Box>
  );
}
