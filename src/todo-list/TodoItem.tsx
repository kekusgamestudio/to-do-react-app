import { useState } from 'react';
import { Todo } from '../interfaces/todo';
import { formatDateTime } from '../utils/formatDateTime';
import { ConfirmDialog } from './ConfirmDialog';
import { NoteDialog } from './NoteDialog';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (todo: Todo) => void;
  onToggleTodo: (todo: Todo) => void;
  onUpdateNote: (id: number, note: string) => void;
}

export const TodoItem = ({
  todo,
  onDeleteTodo,
  onToggleTodo,
  onUpdateNote,
}: TodoItemProps) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showNoteDialog, setShowNoteDialog] = useState(false);
  const hasNote = todo.note.trim().length > 0;

  const handleConfirmDelete = () => {
    onDeleteTodo(todo);
    setShowConfirmDelete(false);
  };

  const handleSaveNote = (note: string) => {
    onUpdateNote(todo.id, note);
    setShowNoteDialog(false);
  };

  return (
    <>
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

        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.noteButton} ${hasNote ? styles.noteButtonActive : ''}`}
            onClick={() => setShowNoteDialog(true)}
            aria-label={`${hasNote ? 'Editar' : 'Agregar'} nota de la tarea: ${todo.description}`}
          >
            Nota
          </button>
          <button
            type="button"
            className={styles.deleteButton}
            onClick={() => setShowConfirmDelete(true)}
            aria-label={`Eliminar tarea: ${todo.description}`}
          >
            Eliminar
          </button>
        </div>
      </li>

      {showNoteDialog && (
        <NoteDialog
          taskDescription={todo.description}
          initialNote={todo.note}
          onSave={handleSaveNote}
          onCancel={() => setShowNoteDialog(false)}
        />
      )}

      {showConfirmDelete && (
        <ConfirmDialog
          title="Eliminar tarea"
          message={`¿Seguro que deseas eliminar "${todo.description}"? Esta acción no se puede deshacer.`}
          onConfirm={handleConfirmDelete}
          onCancel={() => setShowConfirmDelete(false)}
        />
      )}
    </>
  );
};
