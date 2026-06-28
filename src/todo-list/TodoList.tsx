import { Todo } from '../interfaces/todo';
import { TodoAdd } from './TodoAdd';
import { TodoItem } from './TodoItem';
import styles from './TodoList.module.css';

interface TodoListProps {
  todos: Todo[];
  onNewTodo: (todo: Todo) => void;
  onDeleteTodo: (todo: Todo) => void;
  onToggleTodo: (todo: Todo) => void;
  onUpdateNote: (id: number, note: string) => void;
}

export const TodoList = ({
  todos,
  onNewTodo,
  onDeleteTodo,
  onToggleTodo,
  onUpdateNote,
}: TodoListProps) => {
  return (
    <section className={styles.panel}>
      <div className={styles.panelHeader}>
        <h2 className={styles.panelTitle}>Tareas</h2>
        <span className={styles.panelCount}>{todos.length} en total</span>
      </div>

      <TodoAdd onNewTodo={onNewTodo} />

      {todos.length === 0 ? (
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon} aria-hidden="true">📋</span>
          <p className={styles.emptyTitle}>No hay tareas todavía</p>
          <p className={styles.emptyHint}>
            Usa el formulario de arriba para agregar la primera.
          </p>
        </div>
      ) : (
        <ul className={styles.list}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onToggleTodo={onToggleTodo}
              onUpdateNote={onUpdateNote}
            />
          ))}
        </ul>
      )}
    </section>
  );
};
