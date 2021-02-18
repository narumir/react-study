import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  App,
} from './App';
import {
  TaskContextProvider,
} from './task-provider';
import { ThemeContextProvider } from './theme-provider';

ReactDOM.render(
  <ThemeContextProvider>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </ThemeContextProvider>,
  document.getElementById('root')
);
