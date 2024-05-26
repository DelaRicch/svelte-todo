<script lang="ts">
	import { activeTodoItems, allTodoItems, completedTodoItems, handleClearCompleted, handleCompleteTodo, todoItems } from "../store";
	import { cn } from "../utils";
let currentTodoItems = allTodoItems;
let currentFilter = "all";

const filterButtons = [
    {
        label: "All",
        filter: "all"
    },
    {
        label: "Active",
        filter: "active"
    },
    {
        label: "Completed",
        filter: "completed"
    }
]

const handleSelectCurrentTodoItems = (filter: string) => {
    currentFilter = filter;
    switch (filter) {
        case "all":
            currentTodoItems = todoItems;
            break;
        case "active":
            currentTodoItems = activeTodoItems;
            break;
        case "completed":
            currentTodoItems = completedTodoItems;
            break;
        default:
            currentTodoItems = allTodoItems;
            break;
    }
}
</script>

<section class="flex flex-col divide-y divide-slate-400 bg-form">
    {#each $currentTodoItems as todo (todo.id)}
<div class="flex items-center gap-6 p-3">
    <button on:click={() => handleCompleteTodo(todo.id)} class="rounded-full w-6 h-6 border border-slate-500 flex items-center justify-center">
        {#if todo.completed}
        <span class="transform scale-75">
            ✔
        </span>
        {/if}
    </button>
    <input type="text" bind:value={todo.title} class="{cn('h-full text-white outline-none w-full bg-transparent', {
        'line-through text-primary italic pointer-events-none': todo.completed
    
    })}" />
</div>
{:else}
<span class="text-center py-10 font-semibold italic text-primary">No {currentFilter === "all" ? '' : currentFilter} items</span>
{/each}

<div class="flex items-center justify-between p-3">
    <span class="text-primary">{$activeTodoItems.length} item{$activeTodoItems.length === 1 ? '' : 's'} left</span>
    <div class="flex gap-4">
        {#each filterButtons as item}
        <button on:click={() => handleSelectCurrentTodoItems(item.filter)} class="{cn('text-primary font-medium active:bg-dark p-2', {
            'text-active': item.filter === currentFilter
        
        })}">{item.label}</button>
        {/each}

    </div>
    <button disabled={!$completedTodoItems.length} on:click={handleClearCompleted} class="text-primary font-medium active:bg-dark p-2 disabled:pointer-events-none">Clear Completed</button>
</div>
</section>