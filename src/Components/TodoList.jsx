// React
import React from "react";

// Todo Item
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  handleDeleteTodo,
  handleCompleted,
  handleEditTodo,
}) => {
  return (
    <ul className="todo-ul">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleted={handleCompleted}
            handleEditTodo={handleEditTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
