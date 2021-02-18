import {
  FC, useContext, useState,
} from "react";
import { ActionType, TaskContext } from "./todo-provider";

export const App: FC = () => {
  const [newTask, setNewTask] = useState("");
  const { tasks, dispatch } = useContext(TaskContext);
  const onAddTask = () => {
    dispatch({ type: ActionType.ADD_TASK, content: newTask });
    setNewTask("");
  };
  const onCompleteTask = (id: string) => {
    dispatch({ type: ActionType.COMPLETE_TASK, id });
  };
  const onDeleteTask = (id: string) => {
    dispatch({ type: ActionType.DELETE_TASK, id });
  }
  return (
    <div className="App">
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={onAddTask}> 추가 </button>
      {tasks.map((task) => (
        <div key={task.id}>
          {task.content} {task.complete ? "완료됨" : "미 완료"}
          <button onClick={() => onCompleteTask(task.id)}> 완료 </button>
          <button onClick={() => onDeleteTask(task.id)}> 삭제 </button>
        </div>
      ))}
    </div>
  );
};
