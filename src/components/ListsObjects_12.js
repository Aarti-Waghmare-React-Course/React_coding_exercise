// Rendering List of Objects
// When items are objects with multiple properties.

const ListsObjects_12 = () =>{

    const fruits = [
        {id:1,name:'Apple',color:'Red'},
        {id:2,name:'Banana',color:'Yellow'},
        {id:3,name:'Cherry',color:'Red'}
    ];

    return(
        <div>
         {fruits.map((fruit,idex)=>(
            <li key={fruit.id}>{fruit.name} is {fruit.color}</li>
         ))}
        </div>
    );
};

export default ListsObjects_12;