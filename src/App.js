import React ,{useState, useEffect }from 'react';
import {List} from './List'
import {useFetch} from './UseFetch'
import {Header} from './Header'
import {Form} from './Form'


export const TodoContext = React.createContext();
  
const App = ()=>{
  const [todos, setTodo] = useState([]);
  const [newTodo , setNewTodo] = useState();

  const loading = useFetch(setTodo, `http://localhost:8080/todo`)
  
  const ChangeInputData = (e)=>{
    setNewTodo(e.target.value);

  }

  const addTodo = (e)=>{
    e.preventDefault()
    setTodo([...todos, {'title':newTodo, 'id':todos.length, 'status':'todo'}]);
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
    setTodo(updateTodos)
    console.log(updateTodos)
  }
  
  useEffect(()=>{
    console.log("새로운 내용이 입력 되었습니다" ,todos)
  },[todos])
  
  

  return (
    <TodoContext.Provider value={{todos, addTodo,ChangeInputData,loading,changeTodoStatus }}>
    <Header />
    <Form />
    <List/>
    </TodoContext.Provider>
  );
}

export default App;
