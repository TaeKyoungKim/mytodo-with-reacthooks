import React, {useContext, useRef} from 'react'
import {TodoContext} from './TodoStore'

export const Form = () => {
    const inputRef = useRef(null)
    const {dispatch} = useContext(TodoContext);
    const  onButtonClick = (e)=>{
        e.preventDefault()
        dispatch({type:"ADD_TODO" , payload:inputRef.current.value})

    }
    return (
        <form action="">
        <input type="text" className="" ref={inputRef}></input>
        <button className="" onClick={onButtonClick}>할일추가</button>
      </form>
    )
}
