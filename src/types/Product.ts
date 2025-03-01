// src/types/product.ts
export interface Product {
  id: number;
  sku: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: string;
  brand: string;
  stock: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  features?: string[];
  specifications?: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ProductFilters {
  search?: string;
  category?: string;
  brand?: string;
  page: number;
  limit: number;
}