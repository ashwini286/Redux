import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleStatus: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.status = todo.status === 'pending' ? 'completed' : 'pending';
      }
    },
  },
});

export const { addTodo, toggleStatus } = todoSlice.actions;
export default  todoSlice.reducer


