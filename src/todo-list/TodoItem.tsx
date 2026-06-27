import { Todo } from '../interfaces/todo';
import { formatDateTime } from '../utils/formatDateTime';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (todo: Todo) => void;
  onToggleTodo: (todo: Todo) => void;
}

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }: TodoItemProps) => {
  return (
    <li className={`${styles.item} ${todo.done ? styles.itemDone : ''}`}>
      <div
        className={styles.content}
        onClick={() => onToggleTodo(todo)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onToggleTodo(todo);
          }
        }}
        aria-label={todo.done ? 'Marcar como pendiente' : 'Marcar como completada'}
      >
        <span
          className={`${styles.checkbox} ${todo.done ? styles.checkboxChecked : ''}`}
          aria-hidden="true"
        >
          {todo.done ? '✓' : ''}
        </span>

        <div className={styles.details}>
          <span
            className={`${styles.description} ${todo.done ? styles.descriptionDone : ''}`}
          >
            {todo.description}
          </span>

          <div className={styles.meta}>
            <span className={styles.metaItem}>
              Creada: {formatDateTime(todo.createdAt)}
            </span>
            {todo.completedAt !== null && (
              <span className={`${styles.metaItem} ${styles.metaCompleted}`}>
                Finalizada: {formatDateTime(todo.completedAt)}
              </span>
            )}
          </div>
        </div>
      </div>

      <button
        type="button"
        className={styles.deleteButton}
        onClick={() => onDeleteTodo(todo)}
        aria-label={`Eliminar tarea: ${todo.description}`}
      >
        Eliminar
      </button>
    </li>
  );
};
