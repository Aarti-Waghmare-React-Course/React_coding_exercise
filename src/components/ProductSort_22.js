// Sort the List Alphabetically or by Price
// Add buttons to sort the list by name or price

import React, { useState } from 'react';

const ProductSort_22 = () => {
  const [products, setProducts] = useState([
    {id:1,name:'Washing Machine',price:18000},
     {id:2,name:'Fridge',price:30000},
     {id:3,name:'Oven',price:12000},
    {id:4,name:'TV',price:57000},
    {id:5,name:'Toaster',price:7500}
  ]);

  const sortByName = () => {
    const sorted = [...products].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setProducts(sorted);
  };

  const sortByPrice = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setProducts(sorted);
  };

  return (
    <div>
      <h2>Sorted Product List</h2>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPrice} style={{ marginLeft: '10px' }}>Sort by Price</button>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSort_22;
