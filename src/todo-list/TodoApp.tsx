import { TodoList } from './TodoList';
import { useTodo } from '../hooks/useTodo';
import styles from './TodoApp.module.css';

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  } = useTodo();

  const completedCount = todosCount - pendingTodosCount;

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>
          <span className={styles.headerIcon} aria-hidden="true">✓</span>
          Lista de tareas
        </h1>
        <div className={styles.stats}>
          <span className={styles.statChip}>
            Total <strong>{todosCount}</strong>
          </span>
          <span className={`${styles.statChip} ${styles.statChipPending}`}>
            Pendientes <strong>{pendingTodosCount}</strong>
          </span>
          <span className={styles.statChip}>
            Completadas <strong>{completedCount}</strong>
          </span>
        </div>
      </header>

      <main className={styles.mainContainer}>
        <TodoList
          todos={todos}
          onNewTodo={handleNewTodo}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleTodo}
        />
      </main>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Kekus Development Studio
      </footer>
    </div>
  );
};
