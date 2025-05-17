// You have an array of product objects. Show each product's name and price.

const ProductList_17 = () =>{
    const products = [
               {id:1,name:'Washing Machine',price:18000},
               {id:2,name:'Fridge',price:30000},
               {id:3,name:'Oven',price:12000},
               {id:4,name:'TV',price:57000},
               {id:1,name:'Toaster',price:75000}
    ];

    return(
        <>
        <h1>Products Lists</h1>
        {
            products.map((product)=>(
                <li key={product.id}>{product.name} - {product.price}</li>
            ))
        }

        </>
    );
};

export default ProductList_17;