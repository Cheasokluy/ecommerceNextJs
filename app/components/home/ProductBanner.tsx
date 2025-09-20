import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";

interface ProductBannerProps {
  name: string;
  description: string;
  image: string;
  cta?: string;
  link?: string;
}

export default function ProductBanner({ name, description, image, cta = "Shop Now", link = "/" }: ProductBannerProps) {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      bgcolor: "#111",
      color: "#fff",
      borderRadius: 3,
      p: 4,
      minHeight: 320,
      boxShadow: 2,
      gap: 4
    }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle2" mb={1}>
          {name}
        </Typography>
        <Typography variant="h3" fontWeight={700} mb={2}>
          {description}
        </Typography>
        <Button variant="contained" color="primary" size="large" href={link} sx={{ mt: 2, width: 140 }}>
          {cta}
        </Button>
      </Box>
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
  <Image src={image} alt={name} style={{ maxWidth: "100%", maxHeight: 320, borderRadius: 16 }} />
      </Box>
    </Box>
  );
}
