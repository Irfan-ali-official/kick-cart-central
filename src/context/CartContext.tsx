
import { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '@/types';
import { useToast } from '@/components/ui/use-toast';
import { getProduct } from '@/lib/data';

interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number, size: string, color: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (product: Product, quantity: number, size: string, color: string) => {
    setCartItems(prevItems => {
      // Check if this product (with same size and color) is already in the cart
      const existingItemIndex = prevItems.findIndex(
        item => item.product.id === product.id && item.size === size && item.color === color
      );

      let newItems;
      if (existingItemIndex > -1) {
        // Update quantity if item exists
        newItems = [...prevItems];
        newItems[existingItemIndex].quantity += quantity;
      } else {
        // Add new item if it doesn't exist
        newItems = [...prevItems, { product, quantity, size, color }];
      }

      toast({
        title: "Added to Cart",
        description: `${quantity} x ${product.name} has been added to your cart.`,
      });

      return newItems;
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
    toast({
      title: "Item Removed",
      description: "The item has been removed from your cart.",
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
    });
  };

  // Calculate total number of items
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price
  const cartTotal = cartItems.reduce((total, item) => {
    const price = item.product.salePrice || item.product.price;
    return total + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      cartCount,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
