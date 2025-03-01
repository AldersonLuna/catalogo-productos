import { Suspense } from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { notFound } from 'next/navigation';
import { productService } from '@/services/productService';

export async function generateMetadata({
  params,
}: {
  params: { sku: string };
}): Promise<Metadata> {
  try {
    const product = await productService.getProductBySku(params.sku);
    
    return {
      title: `${product.name} - Catálogo de Productos`,
      description: product.description.substring(0, 160),
      openGraph: {
        title: product.name,
        description: product.description.substring(0, 160),
        images: product.images[0] ? [{ url: product.images[0] }] : [],
      },
    };
  } catch (error) {
    return {
      title: 'Producto - Catálogo de Productos',
      description: 'Detalles del producto',
    };
  }
}

export default async function ProductPage({ params }: { params: { sku: string } }) {
  let product;
  
  try {
    product = await productService.getProductBySku(params.sku);
  } catch (error) {
    notFound();
  }
  
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: product.category, href: `/?category=${encodeURIComponent(product.category)}` },
    { label: product.name, href: `/products/${product.sku}`, current: true },
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-1">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-gray-600 mb-4">Precio: ${product.price}</p>
            <p className="text-gray-600 mb-4">Marca: {product.brand}</p>
        </div>
      </div>
    </div>
  );
}