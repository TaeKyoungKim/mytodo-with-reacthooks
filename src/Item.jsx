import React from 'react'
import './Item.css'

export const Item = ({todos,changeTodoStatus}) => {
    
    const toggleItem = (e)=>{
        const id = e.target.dataset.id
        changeTodoStatus(id)
    }
    const itemClassName = todos.status === 'done' ? 'done':''
    return (
        <li data-id={todos.id} onClick={toggleItem} className={itemClassName}>{todos.title}</li>
    )
}
