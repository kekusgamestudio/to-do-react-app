import { Todo } from '../interfaces/todo';
import { TodoItem } from './TodoItem';

export const TodoList = ( props:never ) => {

  const {todos = [], onDeleteTodo, onToggleTodo} = props;
  
  return (
    <ul className='list-group'>
      {
        todos.map( (todo:Todo) => (
          <TodoItem 
            key={ todo.id } 
            todo={ todo } 
            onDeleteTodo={ (todo:Todo) => onDeleteTodo(todo) } 
            onToggleTodo={ (todo:Todo) => onToggleTodo(todo) }
          />
        ))
      }
    </ul>
  )
}
