// ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      {/* Add more product details if needed */}
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
