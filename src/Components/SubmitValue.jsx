import React, { useState } from "react";

const SubmitValue = () => {
  const [data, setData] = useState("");
  const handleSubmit = (e) => {
    setData(e.target[0].value)
    e.preventDefault()
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <button type="submit">submit</button>
          <h1>name:{data}</h1>
        </form>
      </div>
    </>
  );
};

export default SubmitValue;
