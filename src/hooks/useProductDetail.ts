// src/hooks/useProductDetail.ts
'use client';

import { useQuery } from '@tanstack/react-query';
import { getProductBySku } from '@/services/api';
import { Product } from '@/types/Product';

export function useProductDetail(sku: string) {
  return useQuery<Product | null, Error>({
    queryKey: ['product', sku],
    queryFn: () => getProductBySku(sku),
    staleTime: 1000 * 60 * 5, // 5 minutos
    enabled: !!sku,
  });
}
