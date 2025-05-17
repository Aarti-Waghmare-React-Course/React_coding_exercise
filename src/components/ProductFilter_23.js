// Conditional Rendering / Filtered View
// Add a button to filter and show only expensive products (e.g., price > ₹30,000).

import React, { useState } from 'react';

const ProductFilter_23 = () => {
  const allProducts = [
    {id:1,name:'Washing Machine',price:18000},
     {id:2,name:'Fridge',price:30000},
     {id:3,name:'Oven',price:12000},
    {id:4,name:'TV',price:57000},
    {id:5,name:'Toaster',price:7500}
  ];

  const [showExpensive, setShowExpensive] = useState(false);

  const filteredProducts = showExpensive
    ? allProducts.filter((p) => p.price > 30000)
    : allProducts;

  return (
    <div>
      <h2>{showExpensive ? 'Expensive Products' : 'All Products'}</h2>
      <button onClick={() => setShowExpensive(!showExpensive)}>
        {showExpensive ? 'Show All' : 'Show Expensive'}
      </button>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter_23;
