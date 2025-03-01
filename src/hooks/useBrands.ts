// src/hooks/useBrands.ts
'use client';

import { useQuery } from '@tanstack/react-query';
import { getBrands } from '@/services/api';

export function useBrands() {
  return useQuery<string[], Error>({
    queryKey: ['brands'],
    queryFn: getBrands,
    staleTime: 1000 * 60 * 30, // 30 minutos
  });
}