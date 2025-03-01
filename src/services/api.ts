// src/services/api.ts
import { Product, ProductFilters, ProductsResponse } from "@/types/Product";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function getProducts(filters: ProductFilters): Promise<ProductsResponse> {
  const { search, category, brand, page = 1, limit = 10 } = filters;
  
  let url = `${API_URL}/products?_page=${page}&_limit=${limit}`;
  
  if (search) {
    url += `&q=${encodeURIComponent(search)}`;
  }
  
  if (category) {
    url += `&category=${encodeURIComponent(category)}`;
  }
  
  if (brand) {
    url += `&brand=${encodeURIComponent(brand)}`;
  }
  
  const response = await fetch(url);
  const total = parseInt(response.headers.get('X-Total-Count') || '0', 10);
  const products = await response.json();
  
  return {
    products,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit)
  };
}

export async function getProductBySku(sku: string): Promise<Product | null> {
  const response = await fetch(`${API_URL}/products?sku=${encodeURIComponent(sku)}`);
  const products = await response.json();
  
  return products.length > 0 ? products[0] : null;
}

export async function getCategories(): Promise<string[]> {
  const response = await fetch(`${API_URL}/categories`);
  const categories = await response.json();
  return categories.map((cat: { name: string }) => cat.name);
}

export async function getBrands(): Promise<string[]> {
  const response = await fetch(`${API_URL}/brands`);
  const brands = await response.json();
  return brands.map((brand: { name: string }) => brand.name);
}