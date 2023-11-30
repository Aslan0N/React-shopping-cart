// React
import React, { useState } from "react";

// Icons
import { FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";
import { MdCancel } from "react-icons/md";




const TodoItem = ({
  todo,
  handleDeleteTodo,
  handleCompleted,
  handleEditTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const [editedText, setEditedText] = useState(todo.text);

  // // Handle Edit Todo
  const handleEdit = () => {
    setIsEditing(true);
  };

  // // Handle Save Edit
  const handleSaveEdit = () => {
    handleEditTodo(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div className="first">
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
         <div className="button-con">
         <button onClick={handleSaveEdit}><CiSaveDown2 className="i-save"/></button>
          <button onClick={()=> setIsEditing(false)}><MdCancel className="i-cancel"/></button>
         </div>
        </div>
      ) : (
        <div className="flex">
          <span
          
            onClick={() => handleCompleted(todo.id)}
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
         <div className="button-con">
           <button onClick={handleEdit}><CiEdit className="i-edit"/></button>
          <button onClick={() => handleDeleteTodo(todo.id)}><FaTrash className="i-trash" /></button>
         </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
