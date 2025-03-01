// src/hooks/useProducts.ts
'use client';

import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/api';
import { ProductFilters, ProductsResponse } from '@/types/Product';

export function useProducts(filters: ProductFilters) {
  return useQuery<ProductsResponse, Error>({
    queryKey: ['products', filters],
    queryFn: () => getProducts(filters),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
}