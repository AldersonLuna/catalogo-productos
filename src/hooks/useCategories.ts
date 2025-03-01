// src/hooks/useCategories.ts
'use client';

import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/services/api';

export function useCategories() {
  return useQuery<string[], Error>({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 30, // 30 minutos
  });
}