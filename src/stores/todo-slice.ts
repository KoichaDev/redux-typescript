import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
	id: number;
	text: string;
	completed: boolean;
};

type TodoSliceState = {
	todos: Todo[];
};

const initialState: TodoSliceState = {
	todos: [],
};

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<string>) {
			state.todos = [
				...state.todos,
				{
					id: state.todos.length,
					text: action.payload,
					completed: false,
				},
			];
		},
		removeTodo(state, action: PayloadAction<number>) {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
	},
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice;
