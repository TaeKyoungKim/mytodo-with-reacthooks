import React ,{useEffect ,useReducer }from 'react';
import {List} from './List'
import {useFetch} from './UseFetch'
import {Header} from './Header'
import {Form} from './Form'


export const TodoContext = React.createContext();

const todoRedcer =(todos, action)=>{
    switch (action.type) {
        case "ADD_TODO":
            
            // return;
            return [...todos, {'title':action.payload, 'id':todos.length+1, 'status':'todo'}];
        case "SET_INIT_DATA":
        
            return action.payload;

        default:
            throw new Error();
    }
}
  
const TodoStore = ()=>{
//   const [todos, setTodo] = useState([]);
  const [todos, dispatch] = useReducer(todoRedcer , [])
//   const [newTodo , setNewTodo] = useState();

const setInitData = (initData)=>{
    dispatch({type:'SET_INIT_DATA' , payload:initData})
}
  const loading = useFetch(setInitData, `http://localhost:8080/todo`)
  
  

  const addTodo = (newTodo)=>{
  
    // setTodo();
  }

  const changeTodoStatus = (id)=>{
    // debugger;
    const updateTodos= todos.map(todo=>{
      if(todo.id === +id){
          if(todo.status === 'done') todo.status ="todo"
          else todo.status= "done"
      }

      return todo
    })
    // setTodo(updateTodos)
    console.log(updateTodos)
  }
  
  useEffect(()=>{
    console.log("새로운 내용이 입력 되었습니다" ,todos)
  },[todos])
  
  

  return (
    <TodoContext.Provider value={{todos, dispatch,loading,changeTodoStatus }}>
    <Header />
    <Form />
    <List/>
    </TodoContext.Provider>
  );
}

export default TodoStore;
