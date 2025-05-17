// Add New Product Using Input Fields
// Add a form with inputs for product name and price. On submit, the new product should be added to the product list dynamically.

import react from 'react';
import {useState} from 'react';

const ProductAdd_20 = () =>{

    const [products,setProducts] = useState([
        {id:1,name:'Washing Machine',price:18000},
               {id:2,name:'Fridge',price:30000},
               {id:3,name:'Oven',price:12000},
               {id:4,name:'TV',price:57000},
               {id:1,name:'Toaster',price:75000}
    ]);

    const [name,setName] = useState('');
    const [price,setPrice] = useState('');

    const handleAddProduct = (e) =>{
        e.preventDefault();

        if(!name || !price)
        {
            alert(' Please enter both name and price');
           return;
        }

    const newProduct = {
      id: products.length + 1,  // simple id, better to use uuid for real apps
      name,
      price: Number(price)
    };

    setProducts([...products, newProduct]);
    setName('');
    setPrice('');
  };

    return(
            <>
            <h2>Product List</h2>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>
            </>
    );
};

export default ProductAdd_20;