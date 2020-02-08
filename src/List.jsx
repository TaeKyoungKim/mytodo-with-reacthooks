import React from 'react'

export const List = ({todos}) => {
    const todoLists = todos.map(todo=>{
       return <li>{todo}</li>
    })
    return (
        <div>
           <ul>
              {todoLists}
           </ul>
        </div>
    )
}
