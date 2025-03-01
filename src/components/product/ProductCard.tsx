'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/Product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/products/${product.sku}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] h-full flex flex-col">
        <div className="relative h-48 w-full bg-gray-100">
          <Image
            src={product.images[0] || '/placeholder-image.jpg'}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            priority={false}
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <span className="text-sm text-gray-500">{product.brand}</span>
          <h3 className="text-lg font-medium mt-1 text-gray-800 line-clamp-2">{product.name}</h3>
          <div className="mt-2 mb-2 flex flex-col gap-1">
            <div className="flex items-center text-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`${i < Math.round(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}>
                  ★
                </span>
              ))}
              <span className="ml-1 text-gray-600">({product.reviews})</span>
            </div>
            <span className="text-gray-500 text-sm">{product.category}</span>
          </div>
          <div className="mt-auto">
            {product.discountPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-blue-600">${product.discountPrice.toFixed(2)}</span>
                <span className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
            )}
            <div className="mt-2 text-sm text-gray-600">
              {product.stock > 0 ? (
                <span className="text-green-600">En stock</span>
              ) : (
                <span className="text-red-600">Agotado</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};