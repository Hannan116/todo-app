import React from "react";
import { FaTrashCan } from "react-icons/fa6";

import style from "./todo.module.css";
const Todo = (props) => {
  const { title, desc } = props.todo;
  const handleDelete = (id) => {
    props.onDeleteTodo(id);
  };
  return (
    <article className={style.todo}>
      <div>
        {<h3>{title}</h3>}
        {<p>{desc}</p>}
      </div>
      <div>
        <button
          className={style.btn}
          onClick={() => {
            handleDelete(props.id);
          }}
        >
          <FaTrashCan />
        </button>
      </div>
    </article>
  );
};

export default Todo;
