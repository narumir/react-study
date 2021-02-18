import { Container, createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React, {
  FC, useContext,
} from "react";
import { AddTask } from "./add-task";
import { TaskList } from "./task-list";
import { ThemeContext } from "./theme-provider";
import { ToggleTheme } from "./toggle-theme";

export const App: FC = () => {
  const { isDark } = useContext(ThemeContext);
  const theme = createMuiTheme({
    palette: {
      type: isDark ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <ToggleTheme />
        <AddTask />
        <TaskList />
      </Container>
    </ThemeProvider>
  );
};
