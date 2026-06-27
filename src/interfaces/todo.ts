export interface Todo {
  id: number;
  done: boolean;
  description: string;
  createdAt: number;
  completedAt: number | null;
}