import React from 'react'
import {Item} from './Item'

export const List = ({todos ,loading,changeTodoStatus}) => {
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
