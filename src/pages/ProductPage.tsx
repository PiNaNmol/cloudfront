
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === productId);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/" className="text-primary hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/" className="text-primary hover:underline">
          ← Back to products
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="object-contain max-h-[400px]"
          />
        </div>
        
        <div>
          <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm mb-4">
            {product.brand}
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          
          <p className="text-3xl font-bold text-primary mb-6">
            ${product.price.toFixed(2)}
          </p>
          
          <p className="text-gray-600 mb-8">{product.description}</p>
          
          <Button 
            onClick={handleAddToCart}
            size="lg"
            className="w-full mb-8"
          >
            <ShoppingCart className="mr-2" />
            Add to Cart
          </Button>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-4 text-lg">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Processor</p>
                  <p className="font-medium">{product.specs.processor}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Memory</p>
                  <p className="font-medium">{product.specs.memory}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Storage</p>
                  <p className="font-medium">{product.specs.storage}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Display</p>
                  <p className="font-medium">{product.specs.display}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">OS</p>
                  <p className="font-medium">{product.specs.os}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Warranty</p>
                  <p className="font-medium">{product.specs.warranty}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
