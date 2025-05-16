// Conditional Rendering in Lists
// Render only items that satisfy a condition.

const ListsConditions_13 = () =>{
       const fruits = [
        {id:1,name:'Apple',color:'Red'},
        {id:2,name:'Banana',color:'Yellow'},
        {id:3,name:'Strawberry',color:'Red'}
       ];

    return(
      <div>
        {
            fruits
            .filter((fruit)=>fruit.color==='Red')
            .map((fruit)=>(
                <li key={fruit.id}>{fruit.name}</li>
            ))
        }
      </div>
    );
};

export default ListsConditions_13;