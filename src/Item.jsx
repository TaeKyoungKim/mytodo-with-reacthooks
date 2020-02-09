import React,{useContext}  from 'react'
import './Item.css'
import {TodoContext} from './TodoStore'

export const Item = ({todos}) => {
    const {dispatch} =useContext(TodoContext)
    const toggleItem = (e)=>{
        const id = e.target.dataset.id
        dispatch({type:"CHANGE_TODO_STATUS" , payload:+id})
    }
    const itemClassName = todos.status === 'done' ? 'done':''
    return (
        <li data-id={todos.id} onClick={toggleItem} className={itemClassName}>{todos.title}</li>
    )
}
