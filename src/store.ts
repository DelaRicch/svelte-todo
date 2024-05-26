import { writable } from "svelte/store";
import type { Todo } from "./types";

export const todoItems = writable<Todo[]>([]);

export const addTodoItem = (todo: Todo) => {
    
    todoItems.update((items) => {
        return [...items, todo];
    });
}