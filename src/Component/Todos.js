// Todos.jsx
import React from "react";
import Todo from "./Todo";
import style from "./todos.module.css";

const Todos = (props) => {
  return (
    <section className={style.todos}>
      {props.todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} todo={todo} onDeleteTodo={props.onDeleteTodo} />
      ))}
    </section>
  );
};

export default Todos;
