import { useState } from "react";
import TaskItem from "./components/TaskItem";
import Stats from "./components/Stats";
import Taskİnput from "./components/Taskİnput";

function App() {
  const [todolist, setTodolist] = useState([]);
  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setTodolist([...todolist, newTask])
  };

  function deleteTask(deleteTaskName) {
    setTodolist(todolist.filter((task) => task.taskName !== deleteTaskName));
  }
  function toggleCheck(taskName) {
    setTodolist((prevtodolist) => prevtodolist.map(task => task.taskName === taskName ? { ...task, checked: !task.checked } : task),
    );
  }

  console.log(todolist);
  return (
    <>
      <div className="container">
        <h1>Görev Listesi</h1>

        <Taskİnput addTask={addTask} />

        <div className="todolist">
          <span>Yapılacaklar</span>
          <ul className="list-items">
            {todolist.map((task, key) => (
              < TaskItem task={task} key={key}
                deleteTask={deleteTask} toggleCheck={toggleCheck} />

            ))}

          </ul>
          {todolist.length === 0 ? (
            <p className="notify">Bitirdiniz!</p>
          ) : null}

        </div>
      </div>
      < Stats todolist={todolist} />
    </>

  );
}

export default App;
