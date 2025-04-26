
import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-12">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
            <div className="max-w-md mx-auto">
              <p className="text-gray-500 mb-8">Your cart is currently empty.</p>
              <Button asChild>
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container px-4 mx-auto">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border">
                {cartItems.map((item) => (
                  <div key={`${item.product.id}-${item.size}-${item.color}`}>
                    <div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="w-full sm:w-24 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover object-center" 
                        />
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">
                              <Link to={`/product/${item.product.id}`} className="hover:text-shoe-primary">
                                {item.product.name}
                              </Link>
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">{item.product.brand}</p>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">
                              ${((item.product.salePrice || item.product.price) * item.quantity).toFixed(2)}
                            </div>
                            {item.product.salePrice && (
                              <div className="text-sm text-gray-500 line-through">
                                ${(item.product.price * item.quantity).toFixed(2)}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="mt-2 text-sm text-gray-500">
                          <span className="mr-4">Size: {item.size}</span>
                          {item.color && (
                            <span>
                              Color: 
                              <span 
                                className="inline-block w-3 h-3 rounded-full ml-1" 
                                style={{ backgroundColor: item.color }}
                              ></span>
                            </span>
                          )}
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => item.quantity > 1 && updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center border rounded-full"
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center border rounded-full"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-500 hover:text-red-600"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>${(cartTotal * 0.07).toFixed(2)}</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-bold text-lg mb-6">
                  <span>Total</span>
                  <span>${(cartTotal * 1.07).toFixed(2)}</span>
                </div>
                
                <Button className="w-full bg-shoe-accent hover:bg-shoe-accent/90 mb-3">
                  Checkout <ArrowRight size={16} className="ml-2" />
                </Button>
                
                <div className="text-center">
                  <Link to="/" className="text-sm text-shoe-primary hover:underline">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
