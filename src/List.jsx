import React from 'react'

export const List = ({todos ,loading}) => {
    let todoLists = <h1>TodoList is now Loading....</h1>
    if(!loading) todoLists = todos.map(todo=><li key={todo.id} >{todo.title}</li>)

    return (
        <div>
           <ul>
              {todoLists}
           </ul>
        </div>
    )
}
