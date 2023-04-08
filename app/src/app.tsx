import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import TodoAdd from "./components/todoAdd";
import TodoListItems from "./components/todoList";
import "./app.css";

export function App() {
  const [count, setCount] = useState(0);
  console.log("bob is weird");

  return (
    <>
      <TodoAdd />
      <TodoListItems />
    </>
  );
}
