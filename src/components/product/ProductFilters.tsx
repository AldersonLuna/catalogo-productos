"use client"

import { useState, useEffect } from 'react';
import { useProductContext } from '@/context/ProductContext';
import { useCategories, useBrands } from '@/hooks/useProducts';

export const ProductFilters = () => {
  const { filters, setFilters, resetFilters } = useProductContext();
  const [searchInput, setSearchInput] = useState(filters.search);
  const { data: categories, isLoading: isCategoriesLoading } = useCategories();
  const { data: brands, isLoading: isBrandsLoading } = useBrands();

  // Update context when search input changes (debounced via useProducts hook)
  useEffect(() => {
    setFilters({ search: searchInput });
  }, [searchInput, setFilters]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <div className="mb-4">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
          Buscar
        </label>
        <input
          type="text"
          id="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Buscar productos..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Categoría
        </label>
        <select
          id="category"
          value={filters.category}
          onChange={(e) => setFilters({ category: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Todas las categorías</option>
          {isCategoriesLoading ? (
            <option disabled>Cargando categorías...</option>
          ) : (
            categories?.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))
          )}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
          Marca
        </label>
        <select
          id="brand"
          value={filters.brand}
          onChange={(e) => setFilters({ brand: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Todas las marcas</option>
          {isBrandsLoading ? (
            <option disabled>Cargando marcas...</option>
          ) : (
            brands?.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))
          )}
        </select>
      </div>

      <button
        onClick={resetFilters}
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
      >
        Limpiar filtros
      </button>
    </div>
  );
};
