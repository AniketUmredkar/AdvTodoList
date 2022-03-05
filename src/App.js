import { useRef, useState } from "react";
import { v4 } from "uuid";
import "./App.css";
import CompletedTaskList from "./Components/CompletedTaskList";
import TaskList from "./Components/TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [completedTaskList, setCompletedTaskList] = useState([]);
  const newTask = useRef();

  return (
    <div className="app">
      <h1 className="heading-primary">To-do List</h1>
      <form className="form-add">
        <input
          className="input-add"
          type="text"
          ref={newTask}
          placeholder="New Task..."
        ></input>
        <button
          className="btn btn-add"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (newTask.current.value === "") {
              alert("Please enter a task!");
              return;
            } else if (newTask.current.value.length > 50) {
              alert("Max 50 characters allowed");
              return;
            }
            setTaskList([
              ...taskList,
              { taskName: newTask.current.value, id: v4() },
            ]);
            newTask.current.value = "";
          }}
        >
          Add
        </button>
      </form>
      <TaskList
        taskList={taskList}
        setTaskList={setTaskList}
        completedTaskList={completedTaskList}
        setCompletedTaskList={setCompletedTaskList}
      ></TaskList>
      <CompletedTaskList
        taskList={taskList}
        setTaskList={setTaskList}
        completedTaskList={completedTaskList}
        setCompletedTaskList={setCompletedTaskList}
      ></CompletedTaskList>
      {completedTaskList.length !== 0 ? (
        <button
          className="btn btn-del-comp-tasks"
          onClick={() => {
            setCompletedTaskList([]);
          }}
        >
          Remove Completed Tasks
        </button>
      ) : null}
    </div>
  );
}

export default App;
