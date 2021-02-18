import React, { FC, Fragment, useContext } from "react";
import { TaskItem } from "./task-item";
import { TaskContext } from "./task-provider";

export const TaskList: FC = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <Fragment>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          complete={task.complete}
          content={task.content}
        />
      ))}
    </Fragment>
  );
};
