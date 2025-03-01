"use client"

import { ProductCard } from '@/components/ui/Card';
import { Product } from '@/types/Product';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

export const ProductGrid = ({ products, isLoading }: ProductGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-lg font-medium text-gray-700">No se encontraron productos</h3>
        <p className="text-gray-500 mt-2">Intenta con otros filtros</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col animate-pulse">
      <div className="h-48 w-full bg-gray-200"></div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-6 bg-gray-200 rounded w-full mt-2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mt-2"></div>
        <div className="mt-auto">
          <div className="h-6 bg-gray-200 rounded w-1/3 mt-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mt-2"></div>
        </div>
      </div>
    </div>
  );
};