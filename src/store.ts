import { writable } from "svelte/store";
import type { Todo } from "./types";
export const TodoStore = () => {
	const { subscribe, update, set } = writable<Todo[]>([]);

	function addTodo(todo: Todo) {
		update((todos) => {
			return [...todos, todo];
		});
	}
};
