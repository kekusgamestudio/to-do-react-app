import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { Todo } from '../interfaces/todo';
import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {

  const result = useTodo();

  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  } = result;


  return (
    <>
      <h1>TODO App: { todosCount } <small>pendientes: { pendingTodosCount }</small></h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList 
            todos={ todos } 
            onDeleteTodo={ (todo:Todo) => handleDeleteTodo(todo) }
            onToggleTodo={ (todo:Todo) => handleToggleTodo(todo)}
          />
        </div>
        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd 
            onNewTodo={ (todo:Todo) => handleNewTodo(todo) }
          />
        </div>
      </div>
    </>
  )
}
