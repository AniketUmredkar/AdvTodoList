import React from "react";

function CompletedTaskItem(props) {
  function deleteTask() {
    props.setCompletedTaskList(
      props.completedTaskList.filter((task) => {
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
        checked={true}
        onChange={(e) => {
          if (!e.target.checked) {
            props.setTaskList([...props.taskList, props.task]);
            deleteTask();
          }
        }}
      ></input>
      <span className="task-name completed-task">{props.task.taskName}</span>
    </li>
  );
}

export default CompletedTaskItem;
