import { Button, Card, CardActions, CardHeader } from "@material-ui/core";
import React, { FC, memo, useContext } from "react";
import { ActionType, TaskContext } from "./task-provider";


type Props = {
  id: string;
  complete: boolean;
  content: string;
};
export const TaskItem: FC<Props> = ({
  id,
  complete,
  content
}) => {
  const { dispatch } = useContext(TaskContext);
  const onCompleteTask = (id: string) => {
    dispatch({ type: ActionType.COMPLETE_TASK, id });
  };
  const onDeleteTask = (id: string) => {
    dispatch({ type: ActionType.DELETE_TASK, id });
  };
  return (
    <Card style={{ margin: 10 }}>
      <CardHeader title={content} style={{ textDecoration: complete ? "line-through" : "none" }} />
      <CardActions>
        {!complete && <Button variant="contained" color="primary" onClick={() => onCompleteTask(id)}>완료</Button>}
        <Button variant="contained" color="secondary" onClick={() => onDeleteTask(id)}>삭제</Button>
      </CardActions>
    </Card>
  );
};

export const TaskItemMemo = memo(TaskItem);
