import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./newTodo.module.css";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "", date: null });

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setTodo({ ...todo, date });
  };

  const handleSubmit = (e) => {
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "", date: null });
    notify();
    e.preventDefault();
  };

  const notify = () =>
    toast.success("Task added successfully!", { autoClose: 2000 });

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.formField}>
        <label>Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={todo.title}
          onChange={handleChange}
        ></input>
      </div>
      <div className={style.formField}>
        <label>Description:</label>
        <textarea
          type="text"
          id="desc"
          name="desc"
          value={todo.desc}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className={style.formField}>
        <label>Date:</label>
        <DatePicker
          selected={todo.date}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <div>
        <button type="submit">Add todo</button>
      </div>
    </form>
  );
};

export default NewTodo;
