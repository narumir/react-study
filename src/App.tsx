import { Container } from "@material-ui/core";
import React, {
  FC,
} from "react";
import { AddTask } from "./add-task";
import { TaskList } from "./task-list";

export const App: FC = () => {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <AddTask />
        <TaskList />
      </Container>
    </div>
  );
};
