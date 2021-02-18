import React, {
  FC,
  useContext,
  useState,
} from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
} from "@material-ui/core";
import {
  ActionType,
  TaskContext,
} from "./task-provider";

export const AddTask: FC = () => {
  const [newTask, setNewTask] = useState<string>("");
  const { dispatch } = useContext(TaskContext);
  const onAddTask = () => {
    const length = newTask.trim().length;
    if (length > 0) {
      dispatch({ type: ActionType.ADD_TASK, content: newTask });
      setNewTask("");
    }
  };
  return (
    <Card style={{ margin: 10 }}>
      <CardContent>
        <TextField value={newTask} label="테스크 추가" onChange={(e) => setNewTask(e.target.value)} />
        <Button variant="contained" onClick={onAddTask}> 추가 </Button>
      </CardContent>
    </Card>
  );
};
