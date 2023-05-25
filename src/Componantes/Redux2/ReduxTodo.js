import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleStatus } from './Reduxstore'

const TodoList = () => {
  const todos = useSelector((state) => state.Todo);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = React.useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        name: newTodo,
        id: Date.now().toString(),
        status: 'pending',
      };
      dispatch(addTodo(todo));
      setNewTodo('');
    }
  };

  const handleToggleStatus = (id) => {
    dispatch(toggleStatus(id));
  };

  return (
    <>
      <div>
      <h3>ToDo List</h3>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{listStyle:"none"}}>
            <span>{todo.name}</span>
            <button onClick={() => handleToggleStatus(todo.id)}>
              {todo.status === 'pending' ? 'Pending' : 'Completed'}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;