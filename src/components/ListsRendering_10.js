// 10. Rendering List from Array
// Use JavaScript array and .map() to render list items dynamically.

import react from 'react';

const ListsRendering_10 = () =>{
    const fruits = ['apple','banana','grapes','mangoes'];

    return(
        <div>
        {fruits.map((fruit)=>(
            <li>{fruit}</li>
        ))}
        </div>
    );
};

export default ListsRendering_10;