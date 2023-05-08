<script lang="ts">
  import { onMount } from "svelte";
  import { TaskClass } from "./TaskClass";

  const MODE = {
    EDIT: true,
    VIEW: false,
  };

  let tasks: TaskClass[] = [];

  onMount(() => {
    const existingTasks = localStorage.getItem("tasks");
    tasks = JSON.parse(existingTasks) || [];
    updateTasks();
  });

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function removeEmptyTasks() {
    for (let index = tasks.length - 1; index >= 0; index--) {
      let task = tasks[index];
      if (task.text == "") {
        tasks.splice(index, 1);
      }
    }
  }

  function addTask() {
    tasks = [...tasks, new TaskClass("")];
  }

  function updateTasks() {
    removeEmptyTasks();
    addTask();
    saveTasks();
  }

  function init(element: HTMLInputElement) {
    element.focus();
  }

  function switchMode(task: TaskClass, mode: boolean) {
    task.isInEditMode = mode;
    updateTasks();
  }

  function handleKeyDown(e: KeyboardEvent, task: TaskClass) {
    if (e.code == "Enter") {
      switchMode(task, MODE.VIEW);
    }
  }

  function handleCheckboxClick(e) {
    console.log("Checkbox click: ", e);
  }
</script>

<div class="task">
  <div class="centered-content">
    <h2>Task List</h2>
    <ol>
      {#each tasks as task}
        <li>
          {#if task.isInEditMode}
            <input
              bind:value={task.text}
              use:init
              on:keydown={(e) => handleKeyDown(e, task)}
              on:blur={() => switchMode(task, MODE.VIEW)}
            />
          {:else}
            <input
              on:change={handleCheckboxClick}
              type="checkbox"
              bind:checked={task.isComplete}
            />
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span on:click={() => switchMode(task, MODE.EDIT)}>{task.text}</span
            >
          {/if}
        </li>
      {/each}
    </ol>
  </div>
</div>

<style>
  h2 {
    text-align: left;
    padding-left: 58px;
  }
  li {
    list-style: upper-roman;
    text-align: left;
    padding-bottom: 8px;
    padding-left: 16px;
  }
  .centered-content {
    display: inline-block;
    /* background-color: blue; */
    /* width: 50%; */
    padding: 8px;
    margin: auto;
  }
</style>
