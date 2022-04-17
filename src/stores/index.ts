import { configureStore } from '@reduxjs/toolkit';

import todoSlice from './todo-slice';

const store = configureStore({
	reducer: {
		todos: todoSlice.reducer,
	},
});

type RootState = ReturnType<typeof store.getState>;

export const selectTodos = (state: RootState) => state.todos.todos;

export default store;
