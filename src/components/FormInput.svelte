<script lang="ts">
	import type { Todo } from "../types";
    import { addTodoItem, todoItems} from '../store'
	import { onMount } from "svelte";

    let inputRef: HTMLInputElement;
let title = "";

    const addTodo = (e: SubmitEvent) => {
        e.preventDefault();
        if (title.trim() === "") return;
        
        let todoItem = {
            id: Date.now(),
        title,
        completed: false,
    } as Todo;
    addTodoItem(todoItem);
        title = "";

    }

    onMount(() => {
        inputRef.focus();

        return () => {
            inputRef.blur();
        }
    })

</script>

<form on:submit={addTodo} class="flex items-center justify-between gap-4 h-[4rem] p-4 bg-form">
    <input type="text" bind:this={inputRef} bind:value={title} class="w-full h-full bg-transparent px-1 text-white outline-none" placeholder="Create a new Todo..." />
    <button disabled={title === ""} class="px-4 py-2 w-[8rem] border text-white rounded-lg active:bg-dark disabled:pointer-events-none">Add Todo</button>
</form>