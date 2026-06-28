import { Todo } from '../interfaces/todo';

type StoredTodo = Partial<Todo> & Pick<Todo, 'id' | 'description' | 'done'>;

export const normalizeTodo = (raw: StoredTodo): Todo => ({
  id: raw.id,
  description: raw.description,
  done: raw.done,
  createdAt: raw.createdAt ?? raw.id,
  completedAt: raw.completedAt ?? null,
  note: raw.note ?? '',
});

export const sortTodosByCreatedDesc = (todos: Todo[]): Todo[] =>
  [...todos].sort((a, b) => b.createdAt - a.createdAt);
