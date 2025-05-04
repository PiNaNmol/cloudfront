
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Info } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`} className="block">
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">{product.brand}</span>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">{product.specs.warranty}</span>
          </div>
          
          <div className="flex justify-center h-44 mb-4">
            <img 
              src={product.image} 
              alt={product.name} 
              className="object-contain h-full w-auto"
            />
          </div>
          
          <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2 h-14">
            {product.name}
          </h3>
          
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
            
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link to={`/product/${product.id}`}>
                  <Info size={16} />
                </Link>
              </Button>
              
              <Button size="icon" onClick={handleAddToCart}>
                <ShoppingCart size={16} />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
