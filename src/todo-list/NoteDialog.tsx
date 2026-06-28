import { FormEvent, useEffect, useRef, useState } from 'react';
import styles from './NoteDialog.module.css';

interface NoteDialogProps {
  taskDescription: string;
  initialNote: string;
  onSave: (note: string) => void;
  onCancel: () => void;
}

export const NoteDialog = ({
  taskDescription,
  initialNote,
  onSave,
  onCancel,
}: NoteDialogProps) => {
  const [note, setNote] = useState(initialNote);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCancel();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onCancel]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave(note.trim());
  };

  return (
    <div
      className={styles.overlay}
      onClick={onCancel}
      role="presentation"
    >
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="note-dialog-title"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="note-dialog-title" className={styles.title}>
          Nota de tarea
        </h2>
        <p className={styles.taskName}>{taskDescription}</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <textarea
            ref={textareaRef}
            className={styles.textarea}
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="Escribe una nota complementaria para esta tarea..."
            rows={5}
            aria-label="Nota de la tarea"
          />

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onCancel}
            >
              Cancelar
            </button>
            <button type="submit" className={styles.saveButton}>
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
