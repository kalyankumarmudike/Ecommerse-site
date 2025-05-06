import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/cartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
        <div className="mt-4 flex justify-between">
          <Link 
            to={`/product/${product.id}`}
            className="text-blue-600 hover:underline"
          >
            View Details
          </Link>
          <button 
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
