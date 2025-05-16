// Bonus: List with Event Handlers
// Click a list item to show an alert with its name.

const ListsEvents_14 =()=>{
    const fruits = ['Apple','Banana','Cherry','Strawberry'];

    const handleClick = (fruit)=>{
        alert(`You clicked ${fruit}`);
    }

    return(
        <div>
        {fruits.map((fruit)=>(
            <li key={fruit} onClick={()=>handleClick(fruit)}>{fruit}</li>
        ))}
        </div>
    );
};

export default ListsEvents_14;
