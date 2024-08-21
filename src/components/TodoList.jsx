import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({todos, deleteTodo, editTodo}) => {

  return (
    <>
      <ul>
        {todos.map((todo,index) => (
            <TodoItem key={index} index={index} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
