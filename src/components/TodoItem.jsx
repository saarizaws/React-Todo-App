import React, { useState } from "react";

const TodoItem = ({ index, todo, deleteTodo, editTodo }) => {

const [isEditing, setIsEditing] = useState(false)
const [editedTodo, setEditedTodo] = useState(todo);

    const handleEdit = () => {
        if(editedTodo.trim()){
            editTodo(index, editedTodo);
            setIsEditing(false);
        }
    }

  return (
    <>
      <li>
        {isEditing ? (
            <>
                <input type="text" value={editedTodo} onChange={(e) => setEditedTodo(e.target.value)}/>
                <button onClick={handleEdit}>Save</button>

            </>
        ) : (
            <>
                <span>{todo}</span>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
            </>
        )}
      </li>
    </>
  );
};

export default TodoItem;
