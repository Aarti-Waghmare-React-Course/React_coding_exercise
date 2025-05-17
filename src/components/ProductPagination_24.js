// Pagination in List
// Show only a few products per page (e.g., 3 at a time), and allow navigation between pages.
import React, { useState } from 'react';

const ProductPagination_24 = () => {
  const products = [
    {id:1,name:'Washing Machine',price:18000},
     {id:2,name:'Fridge',price:30000},
     {id:3,name:'Oven',price:12000},
    {id:4,name:'TV',price:57000},
    {id:5,name:'Toaster',price:7500},
    { id: 6, name: 'Laptop', price: 45000 },
    { id: 7, name: 'Phone', price: 25000 },
    { id: 8, name: 'Tablet', price: 15000 },
    { id: 9, name: 'Monitor', price: 32000 },
    { id: 10, name: 'Mouse', price: 1200 },
    { id: 11, name: 'Keyboard', price: 1800 },
    { id: 12, name: 'Headphones', price: 2800 },
    { id: 13, name: 'Camera', price: 38000 }
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h2>Product List (Page {currentPage} of {totalPages})</h2>

      <ul>
        {paginatedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '10px' }}>
        <button onClick={goToPrev} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={goToNext} disabled={currentPage === totalPages} style={{ marginLeft: '10px' }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductPagination_24;
