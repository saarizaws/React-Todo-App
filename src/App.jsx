import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

const defaultTodo = [];

const App = () => {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    if(todos != defaultTodo){
      localStorage.setItem("todos",JSON.stringify(todos));
    }
  },[todos])

  const handleAdd = (id) => {
    setTodos([...todos, {id: uuidv4(),todo, isDone: false, isEditing: false}]);
  }

  const handleEdit = (e) => {
    const t = todos.filter((i) => i.id === e.target.id);
    setTodo(t[0].todo);
    handleDelete(e);
  }

  const handleDelete = (e) => {
    let index = todos.findIndex((item) => item.id === e.target.id);
    setTodos(todos.filter((_,i) => i !== index));
  }

  const handleIsDone = (e) => {
    let i = e.target.id;
    let index = todos.findIndex((item) => item.id === i);
    let newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  }

  return (
    <>
      <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodoForm mb-2">
          <h1 className='text-xl font-bold'>Add a Todo</h1>
          <input className='w-1/2 rounded-md py-1' type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button id={0} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 mx-2 text-white rounded-md'   onClick={handleAdd}>Save</button>
        </div>
        <h1 className='text-xl font-bold'>My Todos</h1>
        <div className="todos">
          {todos.length === 0 && <div>No Todos to display</div>}
          {todos.map(item => (
            <div key={item.id} className="todo flex gap-8 mt-2 border-solid border-2 border-gray-300 p-2">
            <div className={item.isDone ? "line-through" : ""}>{item.todo}</div>
            <input id={item.id} type="checkbox" value={item.isDone} onChange={handleIsDone}/>  
            <button id={item.id} className='bg-blue-800 hover:bg-blue-950 p-2 py-1 mx-2 text-white rounded-md' onClick={handleEdit}>Edit</button>
            <button id={item.id} className='bg-red-800 hover:bg-red-950 p-2 py-1 mx-2 text-white rounded-md' onClick={handleDelete}>Delete</button>
          </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
