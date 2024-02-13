import { useEffect, useReducer } from 'react';
import { todoReducer } from '../todo-list/TodoReducer';
import { Todo } from '../interfaces/todo';


const init = () => {
  return JSON.parse(localStorage.getItem('todos') || '') || [];
}

export const useTodo = () => {

  // State of de TODO list
  const [todos, dispatch] = useReducer(todoReducer, [], init );

  // Local storage update
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [ todos ])
  
  const handleNewTodo = ( todo:Todo ) => {
    //console.log({ todo });
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    }
    dispatch( action );
  }

  const handleDeleteTodo = ( todo:Todo ) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: todo,
    });
  }

  const handleToggleTodo = ( todo:Todo ) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: todo,
    });
  }

  const getPendingCount = () => {
    return todos.filter((todo:Todo) => !todo.done).length
  }

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: getPendingCount(),
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  }

}
