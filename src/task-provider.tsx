import {
  FC,
  Dispatch,
  createContext,
  useReducer,
} from "react";

export enum ActionType {
  ADD_TASK = "add_task",
  COMPLETE_TASK = "complete_task",
  DELETE_TASK = "delete_task",
};

export type Task = {
  id: string;
  content: string;
  complete: boolean;
}

export type Action =
  | {
    type: ActionType.ADD_TASK,
    content: string;
  }
  | {
    type: ActionType.COMPLETE_TASK,
    id: string
  }
  | {
    type: ActionType.DELETE_TASK,
    id: string;
  }

export const taskReducer = (state: Task[], action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TASK: {
      state.push({
        id: Date.now().toString(),
        content: action.content,
        complete: false,
      });
      return [...state];
    }
    case ActionType.COMPLETE_TASK: {
      const idx = state.findIndex((val) => val.id === action.id);
      state[idx].complete = true;
      return [...state];
    }
    case ActionType.DELETE_TASK: {
      const idx = state.findIndex((val) => val.id === action.id);
      state.splice(idx, 1);
      return [...state];
    }
  }
};

export type TaskContextProps = {
  tasks: Task[];
  dispatch: Dispatch<Action>;
};

export const TaskContext = createContext<TaskContextProps>({ tasks: [], dispatch: () => { } });

export const TaskContextProvider: FC = ({
  children
}) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
