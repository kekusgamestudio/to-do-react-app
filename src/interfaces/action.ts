import { Todo } from './todo';

export type Action =
  | { type: '[TODO] Add Todo'; payload: Todo }
  | { type: '[TODO] Remove Todo'; payload: Todo }
  | { type: '[TODO] Toggle Todo'; payload: Todo }
  | { type: '[TODO] Update Note'; payload: { id: number; note: string } };
