<script lang="ts">
	import { todoItems } from "../store";


</script>

<section class="flex flex-col divide-y divide-slate-400 bg-form">
    {#each $todoItems as todo (todo.id)}
<div class="flex items-center gap-6 p-3">
    <button class="rounded-full w-6 h-6 border border-slate-500 flex items-center justify-center">
        <span class="transform scale-75">
            ✔
        </span>
    </button>
    <input type="text" bind:value={todo.title} class="h-full text-white outline-none w-full bg-transparent" />
    <!-- <span class="text-white">{todo.title}</span> -->
</div>
{/each}

<div class="flex items-center justify-between p-3">dsadsds</div>
</section>