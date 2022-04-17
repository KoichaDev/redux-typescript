import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from './stores';
import { addTodo, removeTodo } from './stores/todo-slice';

import './App.css';

function App() {
	const [enteredTodo, setEnteredTodo] = useState('');

	const todos = useSelector(selectTodos);
	const dispatch = useDispatch();

	const enteredTodoHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
		setEnteredTodo(e.target.value);

	const removeTodoHandler = (id: number) => dispatch(removeTodo(id));

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(addTodo(enteredTodo));

		setEnteredTodo('');
	};

	return (
		<div className='App'>
			<h1>Todo List</h1>

			<form onSubmit={onSubmitHandler}>
				<input type='text' value={enteredTodo} onChange={enteredTodoHandler} />
				<button type='submit'>Submit</button>
			</form>

			<ul>
				{todos.map((todo) => {
					return (
						<li key={todo.id}>
							<p>{todo.text}</p>
							<button type='button' onClick={removeTodoHandler.bind(null, todo.id)}>
								x
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
