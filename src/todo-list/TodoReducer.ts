import { Action } from '../interfaces/action';
import { Todo } from '../interfaces/todo';

export const todoReducer = (initialState: Todo[], action: Action) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payload];

    case '[TODO] Remove Todo':
      return initialState.filter((todo: Todo) => todo.id !== action.payload.id);

    case '[TODO] Toggle Todo':
      return initialState.map((todo: Todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }

        const done = !todo.done;

        return {
          ...todo,
          done,
          completedAt: done ? Date.now() : null,
        };
      });

    default:
      return initialState;
  }
};
