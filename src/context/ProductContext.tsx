// src/context/ProductContext.tsx
'use client';

import React, { createContext, useContext, ReactNode, useState } from 'react';
import { ProductFilters } from '@/types/Product';

interface ProductContextType {
  filters: ProductFilters;
  updateFilters: (newFilters: Partial<ProductFilters>) => void;
  resetFilters: () => void;
}

const defaultFilters: ProductFilters = {
  search: '',
  category: undefined,
  brand: undefined,
  page: 1,
  limit: 10
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<ProductFilters>(defaultFilters);

  const updateFilters = (newFilters: Partial<ProductFilters>) => {
    setFilters(prev => {
      // Si estamos cambiando los criterios de búsqueda, reiniciamos la página a 1
      if (newFilters.search !== undefined || 
          newFilters.category !== undefined || 
          newFilters.brand !== undefined) {
        return { ...prev, ...newFilters, page: 1 };
      }
      return { ...prev, ...newFilters };
    });
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <ProductContext.Provider value={{ filters, updateFilters, resetFilters }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
}