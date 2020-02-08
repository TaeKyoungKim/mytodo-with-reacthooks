import React ,{useState, useEffect }from 'react';
import {List} from './List'

const App = ()=>{
  const [todos, setTodo] = useState(['Js Study']);
  const [newTodo , setNewTodo] = useState()

  const ChangeInputData = (e)=>{
    setNewTodo(e.target.value);

  }

  const addTodo = (e)=>{
    e.preventDefault()
    setTodo([...todos, newTodo]);
  }

  useEffect(()=>{
    console.log("새로운 내용이 입력 되었습니다" ,todos)
  },[todos])
  return (
    <div className="App">
    <h1>ToDo Application </h1>
    <form>
      <input type="text" className="" onChange={ChangeInputData}></input>
      <button className="" onClick={addTodo}>할일추가</button>
      <List todos={todos}/>
    </form>
    </div>
  );
}

export default App;
