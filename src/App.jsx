import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleAdd = () => {
    setTodos([...todos, {todo, isDone: false}]);
    console.log(todos);
  }

  const handleEdit = () => {
    console.log();
  }

  const handleDelete = () => {
    console.log();
  }

  return (
    <>
      <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodoForm mb-2">
          <h1 className='text-xl font-bold'>Add a Todo</h1>
          <input className='w-1/2 rounded-md py-1' type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 mx-2 text-white rounded-md' onClick={handleAdd}>Add</button>
        </div>
        <h1 className='text-xl font-bold'>My Todos</h1>
        <div className="todos">
          {todos.map(item => (
            <>
            <div className="todo flex">
            <div className='text'>{item.todo}</div>
            <button className='bg-blue-800 hover:bg-blue-950 p-2 py-1 mx-2 text-white rounded-md' onClick={handleEdit}>Edit</button>
            <button className='bg-red-800 hover:bg-red-950 p-2 py-1 mx-2 text-white rounded-md' onClick={handleDelete}>Delete</button>
          </div>
          </>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
