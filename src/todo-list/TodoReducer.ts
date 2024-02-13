import { Action } from '../interfaces/action';
import { Todo } from '../interfaces/todo';

export const todoReducer = (initialState:Todo[], action:Action) => {

  switch (action.type) {
    case '[TODO] Add Todo':
      console.log('add -->' + JSON.stringify(action.payload))
      return [ ...initialState, action.payload ];

    case '[TODO] Remove Todo': 
      console.log('remove -->' + JSON.stringify(action.payload))
      return initialState.filter( ( todo:Todo ) => todo.id !== action.payload.id );

    case '[TODO] Toggle Todo': 
      console.log('toggle -->' + JSON.stringify(action.payload))
      return initialState.map( ( todo:Todo ) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            done: !todo.done,
          }
        }
        return todo;
      });

      default:
      return initialState;
  }
}

