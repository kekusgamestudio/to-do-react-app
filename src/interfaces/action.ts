import { Todo } from "./todo";

export interface Action {
  type: string;
  payload: Todo;
}