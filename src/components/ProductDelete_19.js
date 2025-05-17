// Remove Item from List on Button Click
// Click a "Delete" button next to a product to remove it from the list dynamically.
import react from 'react';
import {useState} from 'react';

const ProductDelete_19 = () =>{

    const [products,setProducts] = useState([
        {id:1,name:'Washing Machine',price:18000},
               {id:2,name:'Fridge',price:30000},
               {id:3,name:'Oven',price:12000},
               {id:4,name:'TV',price:57000},
               {id:1,name:'Toaster',price:75000}
    ]);

    const handleDelete = (id)=>{
       const updatedProducts = products.filter((product)=> product.id !== id);
       setProducts(updatedProducts);
    };

    const handleDeleteAll = () => {
  setProducts([]); // sets product list to empty array
};


    return(
        <>
        <h2>Product List (with Delete)</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
            <button onClick={() => handleDelete(product.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
        <button onClick={handleDeleteAll}>Delete All Products</button>

        </>
    );
};

export default ProductDelete_19;