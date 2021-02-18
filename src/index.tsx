import React from 'react';
import ReactDOM from 'react-dom';
import {
  App,
} from './App';
import reportWebVitals from './reportWebVitals';
import { TaskContextProvider } from './todo-provider';

ReactDOM.render(
  <TaskContextProvider>
    <App />
  </TaskContextProvider>,
  document.getElementById('root')
);

reportWebVitals();
