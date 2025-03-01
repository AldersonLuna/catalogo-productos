import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductProvider } from '@/context/ProductContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Catálogo de Productos',
  description: 'Encuentra los mejores productos en nuestro catálogo online',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="es">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <ProductProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow bg-gray-50">
                {children}
              </main>
              <Footer />
            </div>
          </ProductProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
