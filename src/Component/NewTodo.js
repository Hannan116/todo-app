import React, { useState } from "react";

import style from "./newTodo.module.css";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;
  const handleChange=(e)=>{
    setTodo({...todo,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) => {
    props.onAddTodo(todo)
    setTodo({title:"", desc:""})
    e.preventDefault();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.formField}>
        <label>Title:</label>
        <input type="text" id="title" name="title" value={title} onChange={handleChange}></input>
      </div>
      <div className={style.formField}>
        <label>Description:</label>
        <textarea type="text" id="desc" name="desc" value={desc} onChange={handleChange}></textarea>
      </div>
      <div>
        <button type="submit">Add todo</button>
      </div>
    </form>
  );
};

export default NewTodo;
