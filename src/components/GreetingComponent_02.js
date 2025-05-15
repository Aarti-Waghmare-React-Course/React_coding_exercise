// 2. Greeting Component
// Create a component that takes a name as a prop and displays a greeting like "Hello, [Name]!".
// Concepts: props, JSX.

import react from 'react';

const GreetingComponent_02 = (props) =>{

    return(
        <div>
         <h2>Hello,{props.name}</h2>
        </div>
    );
};

export default GreetingComponent_02;