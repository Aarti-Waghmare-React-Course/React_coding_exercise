// Click on Product to Show Alert
// When a user clicks on a product, show an alert with its name (e.g., "You clicked on: Washing Machine").

import ProductList_17 from "./ProductList_17";

const ProductClick_18 = () =>{
    const products = [
               {id:1,name:'Washing Machine',price:18000},
               {id:2,name:'Fridge',price:30000},
               {id:3,name:'Oven',price:12000},
               {id:4,name:'TV',price:57000},
               {id:1,name:'Toaster',price:75000}
    ];

    const handleClick = (productName) =>{
          alert(`You clicked on : ${productName}`);
    };

    return(
        <>
        <h1>Click on a Product</h1>
        <ul>
            {
                products.map((product)=>(
                 <li key={product.id} onClick={()=>handleClick(product.name)} style={{cursor:'pointer'}}>{product.name} - {product.price}</li>
                ))
            }
        </ul>
        </>
    );
};

export default ProductClick_18;