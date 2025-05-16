// Adding Unique Keys (Important!)
// React needs unique keys for list items to track them efficiently.

import react from 'react';

const ListsUniqueKeys_11 = () =>{
    const fruits = ['apple','banana','cherry','strawberry'];

    return(
          <div>
            {fruits.map((fruit,index)=>(
                <li key={index}>{fruit}</li>
            ))}
          </div>
    );
};

export default ListsUniqueKeys_11;