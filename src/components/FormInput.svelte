<script lang="ts">
	import { onMount } from "svelte";
	import type { Todo } from "../types";

    let inputRef: HTMLInputElement;
    const date = new Date().getTime();
    const todoItem = {} as Todo;

    const addTodo = (e: SubmitEvent) => {
        e.preventDefault();
        if (todoItem.title.trim() === "") return;
        console.log(todoItem);
        todoItem.title = "";
    }

    onMount(() => {
        inputRef.focus();
    });
</script>

<form on:submit={addTodo} class="flex items-center justify-between gap-4 h-[4rem] p-4 bg-form">
    <input bind:this={inputRef} type="text" bind:value={todoItem.title} class="w-full h-full bg-transparent px-1 text-white outline-none" placeholder="Create a new Todo..." />
    <button disabled={!todoItem.title.length}  class="px-4 py-2 w-[8rem] border text-white rounded-lg active:bg-dark disabled:pointer-events-none">Add Todo</button>
</form>