// Product.ts
export interface Product {
  id: number;
  category_id: number;
  seller_id?: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  sale_price?: number;
  status?: number;
  sale_count?: number;
  review_count?: number;
  image: string[];
  free_delivery?: boolean;
  delivery_fee?: number;
  in_stock?: boolean;
  badge?: string;
  attributes?: Record<string, any>;
}
