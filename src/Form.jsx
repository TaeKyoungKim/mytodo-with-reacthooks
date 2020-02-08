import React, {useContext} from 'react'
import {TodoContext} from './App'

export const Form = () => {
    const {addTodo, ChangeInputData} = useContext(TodoContext)
    return (
        <form action="">
        <input type="text" className="" onChange={ChangeInputData}></input>
        <button className="" onClick={addTodo}>할일추가</button>
      </form>
    )
}
