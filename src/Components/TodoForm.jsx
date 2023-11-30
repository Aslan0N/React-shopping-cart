// React
import React, { useEffect, useState } from "react";

// Todo List
import TodoList from "./TodoList";

const TodoForm = () => {
  // UseEffect
  useEffect(() => {
    const checkLocal = localStorage.getItem("Todos");
    if (checkLocal) {
      setTodos(JSON.parse(checkLocal));
    }
  }, []);

  // Todo Text
  const [todoText, setTodoText] = useState("");

  // Todo List
  const [todos, setTodos] = useState([]);

  // HandleChangeInput
  const handleChangeInput = (e) => {
    // Inputun dəyərinin state ə yazılması
    setTodoText(e.target.value);
  };

  // handelAddTodo
  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      // Yeni todo yaratmaq
      const newTodo = {
        id: Math.random(),
        isCompleted: false,
        text: todoText,
      };

      // Todos arrayinin klonunu yaratmaq və yeni todo ilə birləşdirmək
      setTodos((prevTodos) => [...prevTodos, newTodo]);

      // todoText-i təmizləmək
      setTodoText("");

      const updatedTodos = [...todos, newTodo];
      localStorage.setItem("Todos", JSON.stringify(updatedTodos));
    }
  };

  // Handle Delete
  const handleDeleteTodo = (id) => {
    // Todoların bir-bir silinməsi
    setTodos(todos.filter((delTodo) => delTodo.id !== id));

    // Silindikdən sonra local storage-i yeniləmək
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("Todos", JSON.stringify(updatedTodos));
  };

  // Handle Completed

  const handleCompleted = (id) => {
    // Hərbir todo id ilə tutulub dəyişdirilir
    const completedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(completedTodos);

    // Dəyişdirildikdən sonra local storage-i yeniləmək
    localStorage.setItem("Todos", JSON.stringify(completedTodos));
  };

  // Handle Edit

  const handleEditTodo = (id, newText) => {
    const editedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(editedTodos);
    // Dəyişdirildikdən sonra local storage-i yeniləmək
    localStorage.setItem("Todos", JSON.stringify(editedTodos));
  };

  // ClearAll
  const clearAll = () => {
    // Bütün todoların silinməsi
    setTodos([]);
    // Local storage-i yeniləmək
    localStorage.removeItem("Todos");
  };

  return (
    <div className="container">
      <div className="todo-container">
        <div className="image">
          <div className="content">
            <h3>My Day</h3>
            <p>Thursday, 30 November 2023</p>
          </div>
        </div>
        <div className="form">
          <input
            type="text"
            placeholder="Enter new task"
            value={todoText}
            onChange={handleChangeInput}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <TodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleted={handleCompleted}
          handleEditTodo={handleEditTodo}
        />
        <button
          style={{ display: todos.length > 0 ? "block" : "none" }}
          onClick={clearAll}
          className="clear-btn"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
