import React from 'react'
import './Header.css'

export const Header = (todos) => {
    console.log(todos.todos.length)
    return (
        <div>
        <h1>웰컴 해야할일!!</h1>
        <div className="countInfo">해야할일이 {todos.todos.length}개가 있습니다.</div>
        </div>
    )
}
