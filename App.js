// App.js
import React from 'react';
import Header from './Header';
import ProductCard from './ProductCard';
import Footer from './Footer';
import './App.css';

const productData = [
  { id: 1, name: 'Product 1', price: '$19.99' },
  { id: 2, name: 'Product 2', price: '$29.99' },
  { id: 3, name: 'Product 3', price: '$39.99' },
  // Add more products as needed
];

function App() {
  return (
    <div className="app">
      <Header />
      <div className="product-container">
        {productData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
