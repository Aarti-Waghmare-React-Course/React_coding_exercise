// Start with a number and double it on button click.
import react from 'react';
import {useState} from 'react';

const DoubleNumber_08=()=>{
    const [num,setNum]=useState(2);

    return(
        <div>
         <h1>Number : {num}</h1>
        </div>
    );
};