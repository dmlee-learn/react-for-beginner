import {useState, useEffect} from "react";

function TodoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodos(currentArray => [toDo, ...currentArray])
    setToDo("");
  };
  console.log(toDos);
  return (
    <div className="TodoList">
      <h1>My To Dos ({toDos.length})</h1>
      <form action="" onSubmit={onSubmit}>
      <input type="text" 
        onChange={onChange} 
        value={toDo}
        placeholder="Write your to do..."
      />
      <button>Add To Do</button>
      </form>
      <hr />
      <ul>
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;