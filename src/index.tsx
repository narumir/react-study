import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  App,
} from './App';
import {
  TaskContextProvider,
} from './task-provider';

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});
ReactDOM.render(
  <TaskContextProvider>
    <App />
  </TaskContextProvider>,
  document.getElementById('root')
);
