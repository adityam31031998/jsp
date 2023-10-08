import "./App.css";
import { Card } from "./Components/Card";
import { useState } from "react";
import Togle from "./Components/Togle";
import UserInput from "./Components/UserInput";
import SubmitValue from "./Components/SubmitValue";
import RegisterForm from "./Components/RegisterForm";
import Register from "./Register";
import TodoList from "./Components/TodoList";
function App() {
  const [data, setDate] = useState(true);
  const handleClick = () => {
    setDate(!data);
  };
  return (
    <div>
      <TodoList/>
      <Register/>
      <RegisterForm />

      <h1>Card Gallery</h1>
      <div className="gallary">
        <Card url="./book.jpg" heading="lorem" />
        <Card url="./book.jpg" heading="lorem" />
        <Card url="./book.jpg" heading="lorem" />
        <button onClick={handleClick}>{data ? "on":"off"}</button>
      </div>
      <Togle /><br/><br/>
      <UserInput/>
      <SubmitValue />
    </div>
  );
}

export default App;
