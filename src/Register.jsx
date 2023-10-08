import React, { useState } from "react";

const Register = () => {
  const [datas, setDatas] = useState({
    name: "",
    age: "",
    email: "",
    phoneNumber: "",
  });
  const [data, setData] = useState(datas)


  const handleChange = (e) => {
    setDatas((prev) => {
      if (e.target.name === "name") {
        return { ...prev, name: e.target.value };
      } else if (e.target.name === "age") {
        return { ...prev, age: e.target.value };
      } else if (e.target.name === "email") {
        return { ...prev, email: e.target.value };
      } else if (e.target.name === "phoneNumber") {
        return { ...prev, phoneNumber: e.target.value };
      }
    });
};
const handleSubmit = (e)=>{
    setData(datas)
    e.preventDefault();
}
  return (
    <>
      <h1>Register</h1>
      <form className="reg-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            onChange={handleChange}
            placeholder="name"
            name="name"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={handleChange}
            placeholder="age"
            name="age"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={handleChange}
            placeholder="email"
            name="email"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={handleChange}
            placeholder="password"
            name="phoneNumber"
          />
        </div>
        <div>
          <button type="submit" className="reg-btn">
            submit
          </button>
        </div>
      </form>
      <div>Name:{data.name}</div>
      <div>age:{data.age}</div>
      <div>email:{data.email}</div>
      <div>phoneNumber:{data.phoneNumber}</div>
    </>
  );
};

export default Register;
