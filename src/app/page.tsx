import { Suspense } from 'react';
import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductFilters } from '@/components/product/ProductFilters';
import { useProducts } from '@/hooks/useProducts';
import { useProductContext } from '@/context/ProductContext';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Productos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <ProductFilters />
        </div>
        
        <div className="md:col-span-3">
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductsContent />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function ProductsContent() {
  "use client";
  
  const { filters } = useProductContext();
  const { data, isLoading, error } = useProducts(
    filters.search,
    filters.category,
    filters.brand
  );
  
  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <p className="text-red-700">Error al cargar los productos. Por favor, intenta de nuevo más tarde.</p>
      </div>
    );
  }
  
  return <ProductGrid products={data?.data || []} isLoading={isLoading} />;
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-white p-4 rounded-md shadow-sm h-64 animate-pulse">
          <div className="bg-gray-200 h-36 w-full rounded-md"></div>
          <div className="mt-4 bg-gray-200 h-4 w-3/4 rounded"></div>
          <div className="mt-2 bg-gray-200 h-4 w-1/2 rounded"></div>
          <div className="mt-2 bg-gray-200 h-4 w-1/4 rounded"></div>
        </div>
      ))}
    </div>
  );
}
