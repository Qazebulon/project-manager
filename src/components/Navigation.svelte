<script lang="ts">
  //   import CurrentCategories from "../pages/CurrentCategories.svelte";
  import Reference from "../pages/Reference.svelte";
  import Template from "../pages/Template.svelte";
  import Ideas from "./ideas/Ideas.svelte";
  import Tasks from "./tasks/Tasks.svelte";

  const pages = ["Home", "Tasks", "Ideas", "Template"];
  let currentPage = "Home";

  function changePage(pageNumber) {
    currentPage = pageNumber;
  }
</script>

<div class="Navigation">
  {#each pages as page}
    <button on:click={() => changePage(page)}>{page}</button>
  {/each}
</div>
<div id="Page">
  {#if currentPage == "Home"}
    <Reference />
  {:else if currentPage == "Tasks"}
    <Tasks />
  {:else if currentPage == "Ideas"}
    <Ideas />
  {:else if currentPage == "Template"}
    <Template />
  {:else}
    <h2>Page Not Found!</h2>
  {/if}
  <div />
</div>

<style>
  .Navigation {
    text-align: center;
  }
  button {
    margin: 0.1em;
  }
</style>
