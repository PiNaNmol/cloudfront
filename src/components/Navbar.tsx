
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          TechStore
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-700 hover:text-primary">
            Home
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-primary">
            Products
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingCart className="text-gray-700 hover:text-primary" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
