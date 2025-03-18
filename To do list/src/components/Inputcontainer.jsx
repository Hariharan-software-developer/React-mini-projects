// import React from "react";


function Inputcontainer({inputVal,WriteTodo,addTodo}) {
  return (
    <div className="input-container">
      <input type="text"  value={inputVal} onChange={WriteTodo}/>
      <button onClick={addTodo}>+</button>
    </div>
  );
}

export default Inputcontainer;
