import React,{useContext} from 'react'
import {Item} from './Item'
import {TodoContext} from './TodoStore'


export const List = () => {
    const {todos ,loading,changeTodoStatus} =useContext(TodoContext)
   //  console.log("List todos:"+JSON.stringify(todos))
    let todoLists = <h1>TodoList is now Loading....</h1>
    if(!loading) todoLists = todos.map(todo=><Item key={todo.id}  todos={todo} changeTodoStatus={changeTodoStatus}/>)

    return (
        <div>
           <ul>
              {todoLists}
           </ul>
        </div>
    )
}
