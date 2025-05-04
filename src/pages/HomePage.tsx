
import React from 'react';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to TechStore</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the latest tech products with amazing deals and free shipping.
        </p>
      </div>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <ProductGrid products={products} />
      </section>
    </div>
  );
};

export default HomePage;
