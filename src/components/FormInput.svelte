<script lang="ts">
    const date = new Date().getTime();
    const todoItem = {
        id: date,
        title: "",
        completed: false,
    }
</script>

<form class="flex items-center justify-between gap-4 h-[4rem] p-4 bg-form">
    <input type="text" bind:value={todoItem.title} class="w-full h-full bg-transparent px-1 text-white outline-none" placeholder="Create a new Todo..." />
    <button class="px-4 py-2 w-[8rem] border text-white rounded-lg active:bg-dark">Add Todo</button>
</form>