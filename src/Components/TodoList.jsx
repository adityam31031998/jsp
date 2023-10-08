import React, { useState } from "react";

const TodoList = () => {
  const [data, setDate] = useState([]);
  const [newData, setNewDate] = useState([]);
  const handleChange = (e) => {
    setDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewDate((prev)=>{return [...prev,data]});
    
    setDate("");
  };
  return (
    <>
      <form className="todo-body" onSubmit={handleSubmit}>
        <h1>TodoList</h1>
        <div>
          <input
            value={data}
            type="text"
            placeholder="Enter the List"
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="todo-submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </div>
        <ul>
          {newData.map((prv)=>{
            return <li>{prv}</li>
          })}
        </ul>
      </form>
    </>
  );
};

export default TodoList;
