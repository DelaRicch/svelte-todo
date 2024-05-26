<script lang="ts">
	import { activeTodoItems, allTodoItems, completedTodoItems, handleClearCompleted, handleCompleteTodo, todoItems } from "../store";

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
        <span class="transform scale-75">
            ✔
        </span>
    </button>
    <input type="text" bind:value={todo.title} class="h-full text-white outline-none w-full bg-transparent" />
    <!-- <span class="text-white">{todo.title}</span> -->
</div>
{/each}

<div class="flex items-center justify-between p-3">
    <span class="text-primary">{$activeTodoItems.length} items left</span>
    <div class="flex gap-4">
        {#each filterButtons as item}
        <button on:click={() => handleSelectCurrentTodoItems(item.filter)} class="text-primary">{item.label}</button>
        {/each}

    </div>
    <button on:click={handleClearCompleted} class="text-primary">Clear Completed</button>
</div>
</section>