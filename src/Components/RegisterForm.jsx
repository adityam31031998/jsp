import React, { useState } from "react";

const RegisterForm = () => {
  const [datas, setDatas] = useState([]);
  const handleSubmit = (e) => {
    console.log(e);
    var fname = e.target[0].value;
    var lname = e.target[1].value;
    var uname = e.target.uname.value;
    var password = e.target.password.value;
    e.preventDefault();
    setDatas([fname, lname, uname, password]);
};
  return (
    <>
      <form className="reg-form" onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="fname" name="fname" />
        </div>
        <div>
          <input type="text" placeholder="lname" name="lname" />
        </div>
        <div>
          <input type="text" placeholder="uname" name="uname" />
        </div>
        <div>
          <input type="text" placeholder="password" name="password" />
        </div>
        <div>
          <button type="submit" className="reg-btn">
            submit
          </button>
        </div>
      </form>
      <div>{datas}</div>
    </>
  );
};

export default RegisterForm;
