import React from "react";
import CompletedTaskItem from "./CompletedTaskItem";

function CompletedTaskList(props) {
  return (
    <ul className="list-task">
      {props.completedTaskList.map((task, index) => {
        return (
          <CompletedTaskItem
            task={task}
            key={index}
            taskList={props.taskList}
            setTaskList={props.setTaskList}
            completedTaskList={props.completedTaskList}
            setCompletedTaskList={props.setCompletedTaskList}
          ></CompletedTaskItem>
        );
      })}
    </ul>
  );
}

export default CompletedTaskList;
