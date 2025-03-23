import { TodoInfoProps } from '../../types/types';
import { TodoInfo } from '../TodoInfo';

type TodoListProps = {
  todos: TodoInfoProps[];
};
export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} {...todo} data-id={todo.id} />
      ))}
    </section>
  );
};
