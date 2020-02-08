This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# mytodo-with-reacthooks







## ⚽️ React 와 React Hooks를 이용한 mytodo app 만들기

<img src="/Users/andrewkim/Library/Application Support/typora-user-images/image-20200208191619294.png" alt="image-20200208191ㄹㄴㅇㄹ619294" style="zoom:30%;" />

mytodo app 생성

`npx create-react-app`

App.js

```javascript
import React ,{useState, useEffect }from 'react';
import './App.css';
import {List} from './List'

const App = ()=>{
  const [todo, setTodo] = useState(['Js Study']);
  const [newTodo , setNewTodo] = useState()

  const ChangeInputData = (e)=>{
    setNewTodo(e.target.value);

  }

  const addTodo = (e)=>{
    e.preventDefault()
    setTodo([...todo, newTodo]);
  }

  return (
    <div className="App">
    <h1>ToDo Application </h1>
    <form>
      <input type="text" className="" onChange={ChangeInputData}></input>
      <button className="" onClick={addTodo}>할일추가</button>
      <List todos={todo}/>
    </form>
    </div>
  );
}

export default App;

```



```javascript
const [todo, setTodo] = useState(['This is Test']);
const [newTodo , setNewTodo] = useState()
```

useState 를 활용하여 setNewTodo에 의해서 입력되어진 newTodo값을 setTodo를 이용해서 todo에 넣는다.

List.jsx 

```javascript
import React from 'react'

export const List = ({todos}) => {
    const todoLists = todos.map(todo=>{
       return <li>{todo}</li>
    })
    return (
        <div>
           <ul>
              {todoLists}
           </ul>
        </div>
    )
}

```



`const todoLists = todos.map(todo=>{
       return <li>{todo}</li>
    })`

함수기반형태로 만들어 리스트로 받은 인자값을 map 메소드를 이용해서 li태그에 리터럴 한다.



### useEffect 사용하기 

`useEffect(()=>{`

​	console.log("새로운 내용이 입력되었습니다.")

})`

계속해서 실행 되는 막기 위해서 

```javascript
useEffect(()=>{
		console.log("새로운 내용이 입력되었습니다." ,data)

} ,[data])
```

이런식으로 입력한다.

[ ]여기 부분에 입력받은 데이터(data) 값을 넣으면 그 값을 활용할 수 있다.

#### 예제

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷합니다
  useEffect(() => {
    // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

`useEffect`를 사용하면, React는 DOM을 바꾼 뒤에 “effect” 함수를 실행할 것입니다. Effects는 컴포넌트 안에 선언되어있기 때문에 props와 state에 접근할 수 있습니다. 기본적으로 React는 매 렌더링 이후에 effects를 실행합니다. 



```javascript
......

  useEffect(()=>{
    console.log("새로운 내용이 입력 되었습니다" ,todos)
  },[todos])
  return (
    
.....

export default App;

```



App.js에 추가



### fetch(or axios)를 활용한 localhost:800/todo에서 data 불러오기

```javascript
const fetchInitialData = async ()=>{

  		var response = await fetch(`http://localhost:8080/todo`)

    var res = await response.json()

    await console.log(res.data)

}

  useEffect(()=>{

    console.log("새로운 내용이 입력 되었습니다" ,todos)

  },[todos])

  useEffect(()=>{

    fetchInitialData()

  },[])
```





`http://localhost:8080/todo` 는 https://github.com/TaeKyoungKim/fetchdata/tree/master/model 

여기에 만들어 놓은 소스가 있음 

express , mongnodb를 활용에서 REST api를 만들어 놓음



fetchInitialData 함수 수정 

```javascript
const fetchInitialData = async ()=>{
    var response = await fetch(`http://localhost:8080/todo`)
    var res = await response.json()
    await setTodo(res)
  }


```

수정



res 의 데이터 모양

`{status: "error", message: "Sucess", data: Array(12)}status: "error"message: "Sucess"data: Array(12)0: {_id: "5e364cbac599e2cea4cb1ae2", id: 1, title: "김태경", status: "todo", createdAt: "2020-02-02T04:14:50.668Z", …}1: {_id: "5e364ddac86f2de5cc5414f2", id: 2, title: "박재형", status: "done", createdAt: "2020-02-02T04:19:38.479Z", …}2: {_id: "5e36514a2fcff8f70cbba4db", id: 3, title: "김석호", status: "todo", createdAt: "2020-02-02T04:34:18.506Z", …}3: {_id: "5e3651d43a8e4c24bafe2343", id: 4, title: "수업준비", status: "todo", createdAt: "2020-02-02T04:36:36.054Z", …}4: {_id: "5e36520de19c952a1d2e2f6d", id: 5, title: "수업준비", status: "todo", createdAt: "2020-02-02T04:37:33.418Z", …}5: {_id: "5e365235e19c952a1d2e2f6e", id: 6, title: "파이썬", status: "파이썬api", createdAt: "2020-02-02T04:38:13.668Z", …}6: {_id: "5e365d29cbd1b038a4aa6388", id: 7, title: "파이썬", status: "파이썬api", createdAt: "2020-02-02T05:24:57.744Z", …}7: {_id: "5e365d2ccbd1b038a4aa6389", id: 8, title: "파이썬", status: "파이썬api", createdAt: "2020-02-02T05:25:00.276Z", …}8: {_id: "5e365e3082bb005645589282", id: 9, title: "파이썬", status: "파이썬api", createdAt: "2020-02-02T05:29:20.628Z", …}9: {_id: "5e36ac1ea70c2c152dcabb4a", id: 5, name: "park", provider: "fewffef", createdAt: "2020-02-02T20:01:50.460Z", …}10: {_id: "5e36ad89912e3b1698794b58", id: 2, name: "김태경", provider: "google", createdAt: "2020-02-02T20:07:53.476Z", …}11: {_id: "5e36baa3acac845cf0aa7bda", id: 12, createdAt: "2020-02-02T12:03:47.600Z", updatedAt: "2020-02-02T12:03:47.600Z", __v: 0}length: 12__proto__: Array(0)__proto__: Objectconstructor: ƒ Object()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()hasOwnProperty: ƒ hasOwnProperty()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toString: ƒ toString()valueOf: ƒ valueOf()toLocaleString: ƒ toLocaleString()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()`

여기서 필요한 부분은 res의 데이터 부분이다.

```javascript
const fetchInitialData = async ()=>{
    var response = await fetch(`http://localhost:8080/todo`)
    var res = await response.json()
    await setTodo(res.data)
  }
  useEffect(()=>{
    console.log("새로운 내용이 입력 되었습니다" ,todos)
  },[todos])
  
  useEffect(()=>{
    fetchInitialData()
  },[])
```

이렇게 함으로써 처음 화면이 보여질때 데이터를 불러와서 todos에 복사에서 보여준다.



```javascript
import React from 'react'

export const List = ({todos}) => {
    const todoLists = todos.map(todo=>{
       return <li key={todo.key} >{todo.title}</li>
    })
    return (
        <div>
           <ul>
              {todoLists}
           </ul>
        </div>
    )
}

```



로딩할떄의 표시를 하기 위해서 

App.js에 다음 코드를 추가 

```javascript
....

const [loading, setLoading] = useState(false)

....

const fetchInitialData = async ()=>{
  	setLoading(true)
    var response = await fetch(`http://localhost:8080/todo`)
    var res = await response.json()
    await setTodo(res.data)
    setLoading(false)
  }

```





### CUSTOM HOOKS 

별도의 파일로 만들어 재사용성이 좋게 만들어 보자

```javascript
import React ,{useState, useEffect }from 'react';
import {List} from './List'

const useFetch=(func , url)=>{
  const [loading , setLoading] = useState(false)

  const fetchInitialData = async ()=>{
    setLoading(true)
    var response = await fetch(url)
    var res = await response.json()
    await console.log(res)
    await func(res.data)  
    setLoading(false)

  }

  useEffect(()=>{
    fetchInitialData()
  },[])

  return loading
}

const App = ()=>{
  const [todos, setTodo] = useState([]);
  const [newTodo , setNewTodo] = useState();

  const loading = useFetch(setTodo, `http://localhost:8080/todo`)
  
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
      <List todos={todos} loading={loading}/>
    </form>
    </div>
  );
}

export default App;

```





`const useFetch=(func , url)=>{`
  `const [loading , setLoading] = useState(false)`

  `const fetchInitialData = async ()=>{`
    `setLoading(true)`
    `var response = await fetch(url)`
    `var res = await response.json()`
    `await console.log(res)`
    `await func(res.data)  
    setLoading(false)`

  `}` 

 useFetch 함수로 따로 모아서 인자로 func(함수 처리할 부분 : 왜나하면 useSetTodo는 함수 밖에 있으므로) , url(fetch부분의 주소를 입력할 부분) 놓고

`const loading = useFetch(setTodo, `http://localhost:8080/todo`)` 

에서 loading 의  true false 값을 활용한 로딩될때의 표현을 해주기 위한 부분을 표현한다.



그리고 이것을 UseFetch.js 로 만들어서  App.js에 import 해서 쓴다.

```javascript
#UseFetch.js
import React ,{useState, useEffect} from 'react'

export const useFetch = (func , url)=>{
        const [loading , setLoading] = useState(false)
      
        const fetchInitialData = async ()=>{
          setLoading(true)
          var response = await fetch(url)
          var res = await response.json()
          await console.log(res)
          await func(res.data)  
          setLoading(false)
      
        }

        useEffect(()=>{
            fetchInitialData()
          },[])
        
          return loading
        }
        

```

새로운 입력값을 임시방편으로 반영하기 위해서는 



```javascript
const addTodo = (e)=>{
    e.preventDefault()
    setTodo([...todos, {'title':newTodo, 'id':todos.length+1}]);
  }
```



이부분을 수정

# 잠깐 디버깅할떄 쓸수 있는 것 : debugger;

### Component 간의 state 전달 



List.jsx 에서 <li > ---> 임의의 <Item> 로 바꾸고 전달 받을 속성들에 대하여 수정한다.

```javascript
    if(!loading) todoLists = todos.map(todo=><Item key={todo.id}  todos={todo}/>)

```

이렇게 수정하고 Item.js 로 함수형 컴퍼넌트를 만든다.

```javascript
import React from 'react'

export const Item = ({todos}) => {
    
    const toggleItem = (e)=>{
        const id = e.target.dataset.id
        changeTodoStatus(id)
    }
    return (
        <li data-id={todos.id} onClick={toggleItem} >{todos.title}</li>
    )
}

```





todos.status 값을 변경하기 위해 일단 App.js에 다음과 같은 함수를 만들어 본다.

```javascript
const changeTodoStatus = (id)=>{
    // debugger;
    const updateTodos= todos.map(todo=>{
      if(todo.id === +id){
          if(todo.status === 'done') todo.status ="todo"
          else todo.status= "done"
      }

      return todo
    })
    console.log(updateTodos)
  }
  
.....
<List todos={todos} loading={loading} changeTodoStatus={changeTodoStatus}/>
....
```



List 컴퍼넌트 부분에 새로운 속성하나를 추가해서 실행 함수를 changeTodoStatus 실행되도록 한다.

주의해야 할 부분은 받는 id는 스트링으로 들어 오기 때문에 다음과 같이 +id또는 str(id)로 처리해서 

정수로 바꿔줘야 한다.



다음 List.jsx에도 다음과 같은 changeTodoStatus={changeTodoStatus} 추가 하도록 한다.

```javascript
#List.jsx

import React from 'react'
import {Item} from './Item'

export const List = ({todos ,loading,changeTodoStatus}) => {
    let todoLists = <h1>TodoList is now Loading....</h1>
    if(!loading) todoLists = todos.map(todo=><Item key={todo.id}  todos={todo} changeTodoStatus={changeTodoStatus}/>)

    return (
        <div>
           <ul>
              {todoLists}
           </ul>
        </div>
    )
}

```





List.jsx에도 추가 했으니 다음은 Item.jsx에서 다음과 같이 처리 한다.

```javascript
import React from 'react'
import './Item.css'

export const Item = ({todos,changeTodoStatus}) => {
    
    const toggleItem = (e)=>{
        const id = e.target.dataset.id
        changeTodoStatus(id)
    }
    const itemClassName = todos.status === 'done' ? 'done':''
    return (
        <li data-id={todos.id} onClick={toggleItem} className={itemClassName}>{todos.title}</li>
    )
}

```



changeTodoStatus 인자로 받아서  changeTodoStatus(id) 처럼 실행을 할 수 있도록 정의 내려 주고 클릭 했을때 

할일 리스트의 모양이 바뀌게 하게 위해서 className 에 대한 부분을 const itemClassName = todos.status === 'done' ? 'done':'' 의 조건문을 이용하여 status의 값에 따라 모양이 바뀌게 한다.



### context API부분을 useContext hook으로 쓸수 있다.

```javascript
 <form action="">

    <input type="text" className="" onChange={ChangeInputData}></input>

        <button className="" onClick={()=>addTodo}>할일추가</button>

    </form>
```

App.js에서 작성했던 부분을 Form.jsx로 옮겨서 컴퍼넌트로 만들어서 작성한다.



```javascript
#Form.jsx

export const Form = ({addTodo, ChangeInputData}) => {
    return (
        <form action="">
        <input type="text" className="" onChange={ChangeInputData}></input>
        <button className="" onClick={addTodo}>할일추가</button>
      </form>
    )
}
```



App.js에서 Form 컴퍼넌트 호출해서 쓴다.

```javascript
import {Form} from './Form'
....

<Form addTodo={addTodo} ChangeInputData={ChangeInputData} />
  
 .....
```



이렇게 하면 좀더 모듈화 되고 App.js 가 간략해 진다.



App.js에서 

```javascript
export const TodoContext = React.createContext();

.....

return (
    <TodoContext.Provider value={{todos, addTodo,ChangeInputData,loading,changeTodoStatus }}>
    <Header />
    <Form />
    <List/>
    </TodoContext.Provider>
  );

......


```

와 같이 TodoContext.Provider 컴퍼넌트로 감싼 후 전달할 데이터 들을 

`value={{todos, addTodo,ChangeInputData,loading,changeTodoStatus }}` 객체로 전달한다.



useContext 를 이용하여 다음과 같이 변형하여 state 관리를 할 수 있다.

```javascript
#Header.jsx
import React, {useContext} from 'react'
import './Header.css'
import {TodoContext} from './App'
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
```



마찬가지로 나머지 Form.jsx 와   List.jsx 부분도 Header.jsx 와 같은 방법으로 useContext를 임포는 한후

useContext의 인자로 TodoContext 를 받고 addTodo,ChangeInputData,loading,changeTodoStatus 등으로 전달 받은후 컴퍼넌트에서 데이터를 보여준다.



```javascript
#Form.jsx

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

```





```javascript
import React,{useContext} from 'react'
import {Item} from './Item'
import {TodoContext} from './App'


export const List = () => {
    const {todos ,loading,changeTodoStatus} =useContext(TodoContext)
   //  console.log("List todos:"+JSON.stringify(todos))
    let todoLists = <h1>TodoList is now Loading....</h1>
    if(!loading) todoLists = todos.map(todo=><Item key={todo.id}  todos={todo} changeTodoStatus={changeTodoStatus}/>)

    return (
        <div>
           <ul>
              {todoLists}
           </ul>
        </div>
    )
}

```



### uesRef 를 활용해서 onChange 부분을 간단히

Form.jsx를 userRef를 활용해서 수정한다.

`const inputRef = useRef(false)` 전달 받은 후 



```javascript
const  onButtonClick = (e)=>{
        e.preventDefault()
        addTodo(inputRef.current.value)
}
```

onButtonClick과 같이 임의의 함수를 만든후



```javascript
#Form.jsx 
import React, {useContext, useRef} from 'react'
import {TodoContext} from './TodoStore'

export const Form = () => {
    const inputRef = useRef(false)
    const {addTodo} = useContext(TodoContext);
    const  onButtonClick = (e)=>{
        e.preventDefault()
        addTodo(inputRef.current.value)

    }
    return (
        <form action="">
        <input type="text" className="" ref={inputRef}></input>
        <button className="" onClick={onButtonClick}>할일추가</button>
      </form>
    )
}

```

ref 부분과 onClick 부분에 호출한다.








