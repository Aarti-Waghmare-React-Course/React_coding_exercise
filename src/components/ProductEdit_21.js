// Edit/Update List Items Dynamically
// Allow the user to edit a product's name and price right in the list.


import React, { useState } from 'react';

const ProductEdit_21 = () => {
  const [products, setProducts] = useState([
    {id:1,name:'Washing Machine',price:18000},
     {id:2,name:'Fridge',price:30000},
     {id:3,name:'Oven',price:12000},
    {id:4,name:'TV',price:57000},
    {id:5,name:'Toaster',price:75000}
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedPrice, setEditedPrice] = useState('');

  const startEditing = (product) => {
    setEditingId(product.id);
    setEditedName(product.name);
    setEditedPrice(product.price);
  };

  const saveEdit = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === editingId
          ? { ...product, name: editedName, price: Number(editedPrice) }
          : product
      )
    );
    setEditingId(null);
    setEditedName('');
    setEditedPrice('');
  };

  return (
    <div>
      <h2>Editable Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {editingId === product.id ? (
              <>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <input
                  type="number"
                  value={editedPrice}
                  onChange={(e) => setEditedPrice(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                {product.name} - ₹{product.price}
                <button onClick={() => startEditing(product)} style={{ marginLeft: '10px' }}>
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductEdit_21;
