import { Product } from "../../types/Product";

export async function fetchDemoProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return data.map((item: any) => ({
    id: item.id,
    category_id: 0, // Map category name to ID if needed
    name: item.title,
    slug: item.title.toLowerCase().replace(/ /g, "-"),
    description: item.description,
    price: item.price,
    stock: 100, // Demo value
    sale_price: item.price, // Demo value
    status: 1, // Demo value
    sale_count: 0, // Demo value
    review_count: item.rating?.count || 0,
    image: [item.image],
    free_delivery: true, // Demo value
    delivery_fee: 0, // Demo value
    in_stock: true, // Demo value
    badge: "", // Demo value
    attributes: {}, // Demo value
  }));
}
