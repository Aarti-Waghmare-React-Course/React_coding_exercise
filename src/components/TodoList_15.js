//create a todo list to display todos

import react from 'react';

const TodoList_15 = () =>{
    const todos = ['Learn React','play cricket','practice coding'];

    return(
        <div>
            <h2>To Do Lists</h2>
            <ul>
        {
          todos.map((todo,index)=>(
            <li key={index}>{todo}</li>
          ))
        }
        </ul>
        </div>
    );
};

export default TodoList_15;