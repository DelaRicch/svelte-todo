import { derived, writable } from "svelte/store";
import type { Todo } from "./types";

export const todoItems = writable<Todo[]>([]);

export const addTodoItem = (todo: Todo) => {
    
    todoItems.update((items) => {
        return [...items, todo];
    });
}

export const allTodoItems = derived(todoItems, ($todoItems) => {
    return $todoItems;
});

export const activeTodoItems = derived(todoItems, ($todoItems) => {
    return $todoItems.filter((item) => !item.completed);
})

export const completedTodoItems = derived(todoItems, ($todoItems) => {
    return $todoItems.filter((item) => item.completed);
})


export const handleCompleteTodo = (id: number) => {
    todoItems.update((items) => {
        return items.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        });
    });
}

export const handleClearCompleted = () => {
    todoItems.update((items) => {
        return items.filter((item) => !item.completed);
    });
}