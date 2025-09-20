
import { Box } from "@mui/material";
import HeaderNavbar from "./components/common/HeaderNavbar";
import HomePageClient from "./components/home/HomePageClient";
import HomeHero from "./components/home/HomeHero";
import CartDrawer from "./components/cart/CartDrawer";

export default function HomePage() {

  return (
     <>
      <HeaderNavbar />
      <Box display="flex" justifyContent="space-between" flexDirection={{ xs: "column", md: "row" }} sx={{ my: 4 }}>
        <HomeHero />
      </Box>
      <CartDrawer />
      <HomePageClient />
    </>
  );
}
// ...existing code...
