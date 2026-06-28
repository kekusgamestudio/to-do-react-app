import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import { Todo } from '../interfaces/todo';
import styles from './TodoAdd.module.css';

interface TodoAddProps {
  onNewTodo: (todo: Todo) => void;
}

export const TodoAdd = ({ onNewTodo }: TodoAddProps) => {
  const { description, onInputChange, onFormReset } = useForm({
    description: '',
  });

  const isValid = description.trim().length > 1;

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) return;

    const now = Date.now();

    const newTodo: Todo = {
      id: now,
      done: false,
      description: description.trim(),
      createdAt: now,
      completedAt: null,
      note: '',
    };

    onNewTodo(newTodo);
    onFormReset();
  };

  return (
    <div className={styles.addSection}>
      <h3 className={styles.addTitle}>Agregar tarea</h3>

      <form className={styles.form} onSubmit={onFormSubmit}>
        <div className={styles.fieldGroup}>
          <div className={styles.inputRow}>
            <input
              id="todo-description"
              type="text"
              placeholder="¿Qué tenemos que hacer?"
              className={styles.input}
              name="description"
              value={description}
              onChange={onInputChange}
              autoComplete="off"
              aria-label="Descripción de la tarea"
            />
            <button
              type="submit"
              className={styles.submitButton}
              disabled={!isValid}
            >
              Agregar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
