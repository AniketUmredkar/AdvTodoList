import React, { useRef, useState } from "react";

function TaskItem(props) {
  const [display, setDisplay] = useState(true);
  const editTask = useRef();

  function deleteTask() {
    props.setTaskList(
      props.taskList.filter((task) => {
        if (task.id === props.task.id) {
          return false;
        }
        return true;
      })
    );
  }

  return (
    <li className="item-task">
      <input
        className="checkbox"
        type="checkbox"
        checked={false}
        onChange={(e) => {
          if (e.target.checked) {
            props.setCompletedTaskList([
              ...props.completedTaskList,
              props.task,
            ]);
            deleteTask();
          }
        }}
      ></input>
      <div className="task-name-container">
        <span
          className="task-name"
          style={display ? { display: "inline" } : { display: "none" }}
        >
          {props.task.taskName}
        </span>
        <form
          className="form-edit"
          style={display ? { display: "none" } : { display: "inline-block" }}
        >
          <input className="input-edit" type="text" ref={editTask}></input>
          <button
            className="btn btn-confirm"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              props.setTaskList(
                props.taskList.map((task) => {
                  if (task.taskName === props.task.taskName) {
                    if (editTask.current.value === "") {
                      return task;
                    }
                    return { taskName: editTask.current.value, id: task.id };
                  }
                  return task;
                })
              );
              setDisplay(true);
            }}
          >
            Confirm
          </button>
        </form>
        <button
          className="btn btn-edit"
          style={display ? { display: "inline" } : { display: "none" }}
          onClick={() => {
            editTask.current.value = props.task.taskName;
            setDisplay(!display);
          }}
        >
          Edit
        </button>
      </div>
      <button
        className="btn btn-delete"
        onClick={() => {
          deleteTask();
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
