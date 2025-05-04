
import React from 'react';
import { useCart } from '@/context/CartContext';
import { CartItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Plus, Minus, X } from 'lucide-react';

interface CartItemProps {
  item: CartItem;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const increaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const decreaseQuantity = () => {
    updateQuantity(product.id, quantity - 1);
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="flex items-center py-4 border-b">
      <div className="w-20 h-20 flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-contain w-full h-full"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <h3 className="font-medium text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <p className="text-primary font-semibold mt-1">${product.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center border rounded-md mr-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={decreaseQuantity}
          >
            <Minus size={16} />
          </Button>
          
          <span className="w-8 text-center">{quantity}</span>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={increaseQuantity}
          >
            <Plus size={16} />
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-500" 
          onClick={handleRemove}
        >
          <X size={20} />
        </Button>
      </div>
    </div>
  );
};

export default CartItemComponent;
