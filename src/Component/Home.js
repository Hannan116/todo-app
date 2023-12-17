import React, { useState, useEffect } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import { v4 as uuidv4 } from "uuid";
import style from "./home.module.css";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos, { id: uuidv4(), ...todo }];
      return newTodos;
    });
  };

  const handleDeleteTodo = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Todo App</h1>
      <NewTodo onAddTodo={handleNewTodo} />
      <Todos todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default Home;
