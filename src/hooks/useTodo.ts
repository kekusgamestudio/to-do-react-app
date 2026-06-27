import { useEffect, useMemo, useReducer } from 'react';
import { todoReducer } from '../todo-list/TodoReducer';
import { Todo } from '../interfaces/todo';
import { normalizeTodo, sortTodosByCreatedDesc } from '../utils/normalizeTodo';

const init = (): Todo[] => {
  const stored = localStorage.getItem('todos');
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored) as Todo[];
    return parsed.map(normalizeTodo);
  } catch {
    return [];
  }
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const sortedTodos = useMemo(
    () => sortTodosByCreatedDesc(todos),
    [todos],
  );

  const handleNewTodo = (todo: Todo) => {
    dispatch({
      type: '[TODO] Add Todo',
      payload: todo,
    });
  };

  const handleDeleteTodo = (todo: Todo) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: todo,
    });
  };

  const handleToggleTodo = (todo: Todo) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: todo,
    });
  };

  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  return {
    todos: sortedTodos,
    todosCount: todos.length,
    pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  };
};
