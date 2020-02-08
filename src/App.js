import React ,{useState, useEffect }from 'react';
import {List} from './List'

const App = ()=>{
  const [todos, setTodo] = useState([]);
  const [newTodo , setNewTodo] = useState()
  const [loading , setLoading] = useState(false)

  const ChangeInputData = (e)=>{
    setNewTodo(e.target.value);

  }

  const addTodo = (e)=>{
    e.preventDefault()
    setTodo([...todos, newTodo]);
  }

  const fetchInitialData = async ()=>{
    setLoading(true)
    var response = await fetch(`http://localhost:8080/todo`)
    var res = await response.json()
    await console.log(res)
    await setTodo(res.data)  
    setLoading(false)

  }
  useEffect(()=>{
    console.log("새로운 내용이 입력 되었습니다" ,todos)
  },[todos])
  
  useEffect(()=>{
    fetchInitialData()
  },[])

  return (
    <div className="App">
    <h1>ToDo Application </h1>
    <form>
      <input type="text" className="" onChange={ChangeInputData}></input>
      <button className="" onClick={addTodo}>할일추가</button>
      <List todos={todos} loading={loading}/>
    </form>
    </div>
  );
}

export default App;
