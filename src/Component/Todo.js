// Todo.jsx
import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import style from "./todo.module.css";

const Todo = (props) => {
  const { id, todo, onDeleteTodo } = props;

  if (!todo) {
    return null;
  }

  const { title, desc, date } = todo;

  const handleDelete = () => {
    onDeleteTodo(id);
  };

  return (
    <article className={style.todo}>
      <div>
        {title && <h3>{title}</h3>}
        {desc && <p>{desc}</p>}
        {date && <p style={{color:"yellow"}}>Date: {new Date(date).toDateString()}</p>}
      </div>
      <div>
        <button className={style.btn} onClick={handleDelete}>
          <FaTrashCan />
        </button>
      </div>
    </article>
  );
};

export default Todo;
