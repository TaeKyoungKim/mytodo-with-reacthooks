import React ,{useState, useEffect }from 'react';
import {List} from './List'
import {useFetch} from './UseFetch'
import {Header} from './Header'

  
const App = ()=>{
  const [todos, setTodo] = useState([]);
  const [newTodo , setNewTodo] = useState();

  const loading = useFetch(setTodo, `http://localhost:8080/todo`)
  
  const ChangeInputData = (e)=>{
    setNewTodo(e.target.value);

  }

  const addTodo = (e)=>{
    e.preventDefault()
    setTodo([...todos, {'title':newTodo, 'id':todos.length+1}]);
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
    <div className="App">
    <Header todos={todos} />
    <form>
      <input type="text" className="" onChange={ChangeInputData}></input>
      <button className="" onClick={addTodo}>할일추가</button>
      <List todos={todos} loading={loading} changeTodoStatus={changeTodoStatus}/>
    </form>
    </div>
  );
}

export default App;
