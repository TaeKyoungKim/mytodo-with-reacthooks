import React, {useContext} from 'react'
import './Header.css'
import {TodoContext} from './TodoStore'


// export const Header = ({todos}) => {
//     // const {todos} = useContext(TodoContext)
//     console.log(todos)
//     return (
//         <TodoContext.Consumer>
//             ({todos})=>{
//                 <div>
//                 <h1>웰컴 해야할일!!</h1>
//                 <div className="countInfo">해야할일이 {todos.todos.filter(v=>v.status ==='todo').length}개가 있습니다.</div>
//                 </div>
//             }
//         </TodoContext.Consumer>
        
//     )
// }


export const Header =  () => {
    let todos =  useContext(TodoContext)
    
    // let todo =  todos.map(x=> {return x})
    // let todo1 = Object.entries(todo[0])
    console.log(`Header : ${todos.todos.length}`)
    return (
      
                <div>
                <h1>웰컴 해야할일!!</h1>
                <div className="countInfo">해야할일이 {todos.todos.filter(v=>v.status ==='todo').length}개가 있습니다.</div>
                </div>
       
        
    )
}
