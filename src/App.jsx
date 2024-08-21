import { useEffect, useState } from 'react'
import TodoList from './components/TodoList'
import Navbar from './components/Navbar';

const App = () => {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  },[]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  const addTodo = () => {
    if(newTodo.trim()){
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((_,i) => i !== index));
  }

  const editTodo = (index, updatedTodo) => {
    const updatedTodos = todos.map((todo,i) => (i === index ? updatedTodo : todo));
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <Navbar/>
      <input type="text" value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }}/>
      <button onClick={addTodo}>Add a Todo</button>
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
  )
}

export default App
