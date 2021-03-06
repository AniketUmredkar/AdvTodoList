import React from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

function TaskList(props) {
  return (
    <ul className="list-task">
      {props.taskList.map((task, index) => {
        return (
          <TaskItem
            task={task}
            key={index}
            taskList={props.taskList}
            setTaskList={props.setTaskList}
            completedTaskList={props.completedTaskList}
            setCompletedTaskList={props.setCompletedTaskList}
          ></TaskItem>
        );
      })}
    </ul>
  );
}

export default TaskList;
