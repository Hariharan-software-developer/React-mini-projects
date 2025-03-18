import "./App.css";
import { useState } from "react";
import Inputcontainer from "./components/inputcontainer";
import Todocontainer from "./components/todocontainer";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  function WriteTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal != "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  }
  function delTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }
  console.log(todos);

  return (
    <main>
      <h1>To do list</h1>
      <Inputcontainer
        inputVal={inputVal}
        WriteTodo={WriteTodo}
        addTodo={addTodo}
      />
      <Todocontainer todos={todos} delTodo={delTodo} />
    </main>
  );
}

export default App;
