import { fetchData } from './api';
import { Product } from '@/types/Product';

interface GetProductsParams {
  search?: string;
  category?: string;
  brand?: string;
  page?: number;
  limit?: number;
}

export const productService = {
  getProducts: async ({
    search = '',
    category = '',
    brand = '',
    page = 1,
    limit = 12,
  }: GetProductsParams = {}): Promise<{ data: Product[] }> => {
    let url = `/products?_page=${page}&_limit=${limit}`;
    
    if (search) url += `&q=${encodeURIComponent(search)}`;
    if (category) url += `&category=${encodeURIComponent(category)}`;
    if (brand) url += `&brand=${encodeURIComponent(brand)}`;
    
    const response = await fetchData<Product[]>(url);
    return { data: response };
  },
  
  getProductBySku: async (sku: string): Promise<Product> => {
    const response = await fetchData<Product[]>(`/products?sku=${encodeURIComponent(sku)}`);
    if (!response.length) {
      throw new Error('Product not found');
    }
    return response[0];
  },
  
  getCategories: async (): Promise<string[]> => {
    const response = await fetchData<Product[]>('/products');
    const categories = [...new Set(response.map(item => item.category))];
    return categories;
  },
  
  getBrands: async (): Promise<string[]> => {
    const response = await fetchData<Product[]>('/products');
    const brands = [...new Set(response.map(item => item.brand))];
    return brands;
  }
};

