import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data';

const Home = () => {
  const [filter, setFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(product => product.category === filter);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&auto=format&fit=crop&q=60')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Shopify</h1>
            <p className="text-lg mb-8">Discover premium products with fast shipping and excellent customer service.</p>
            <button 
              onClick={() => {
                document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300 shadow-md"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div id="products-section" className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Our Products</h2>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full transition duration-300 ${
                  filter === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="transform transition duration-300 hover:scale-105"
              style={{ 
                transitionDelay: `${index * 75}ms`,
                animation: `fadeIn 0.5s ease-out ${index * 75}ms forwards`
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
      
      {/* Feature Callout */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">We ensure all our products meet the highest standards of quality.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your products delivered within 2-3 business days.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Your payment information is always protected with us.</p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Home;
