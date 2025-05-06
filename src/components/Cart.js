import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/cartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
        <Link to="/" className="text-blue-600 hover:underline">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex font-semibold border-b pb-4 mb-4">
          <div className="w-2/5">Product</div>
          <div className="w-1/5 text-center">Price</div>
          <div className="w-1/5 text-center">Quantity</div>
          <div className="w-1/5 text-right">Total</div>
        </div>
        
        {cart.map(item => (
          <div key={item.id} className="flex items-center py-4 border-b">
            <div className="w-2/5 flex items-center">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-16 h-16 object-cover rounded" 
              />
              <div className="ml-4">
                <h3 className="font-medium">{item.name}</h3>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm mt-1 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
            
            <div className="w-1/5 text-center">${item.price.toFixed(2)}</div>
            
            <div className="w-1/5 text-center">
              <select 
                value={item.quantity} 
                onChange={(e) => updateQuantity(item.id, e.target.value)}
                className="border rounded p-1 w-16"
              >
                {[...Array(10).keys()].map(num => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="w-1/5 text-right font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
        
        <div className="flex justify-end mt-6">
          <div className="w-1/3">
            <div className="flex justify-between py-2">
              <span className="font-medium">Subtotal:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-medium">Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between py-2 border-t">
              <span className="font-bold">Total:</span>
              <span className="font-bold">${getCartTotal().toFixed(2)}</span>
            </div>
            
            <Link 
              to="/checkout" 
              className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700"
            >
              Proceed to Checkout
            </Link>
            
            <Link 
              to="/" 
              className="block text-center text-blue-600 mt-2 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

