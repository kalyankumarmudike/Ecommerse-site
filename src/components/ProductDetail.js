import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data';
import { useCart } from '../Context/cartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return <div className="container mx-auto p-4">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 md:flex">
        <div className="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover rounded" 
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.category}</p>
          <p className="text-xl text-blue-600 font-semibold mt-2">${product.price.toFixed(2)}</p>
          <p className="mt-4">{product.description}</p>
          <button 
            onClick={handleAddToCart}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
          <button 
            onClick={() => navigate('/')}
            className="mt-6 ml-4 border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100"
          >
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
