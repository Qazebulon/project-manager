<script lang="ts">
  // import { ViewEditToggleTextClass } from "../ViewEditToggleText.svelte";

  // import ViewEditToggleTextClass from "../ViewEditToggleText.svelte";

  // let test = new ViewEditToggleTextClass("test");
  // let test = new ViewEditToggleTextClass('test');
  // let test = "Pending...";

  const STATUS = {
    DISCARDED: "DISCARDED",
    INITIAL: "INITIAL",
    QUEUED: "QUEUED",
    CURRENT: "CURRENT",
    ON_HOLD: "ON HOLD",
    DEPLOYED: "DEPLOYED",
  };
  const MODE = {
    VIEW: true,
    EDIT: false,
  };
  class IdeaClass {
    // test: ;
    name: string;
    nameMode: boolean;
    description: string;
    descriptionMode: boolean;
    status: string;
    constructor(name: string, description: string) {
      this.name = name;
      this.nameMode = MODE.VIEW;
      this.description = description;
      this.descriptionMode = MODE.VIEW;
      this.status = STATUS.INITIAL;
      // this.test = new ViewEditToggleTextClass("TEST");
    }
  }

  // import { IdeaClass, MODE } from "./IdeaClass";

  export let idea: IdeaClass;

  function switchMode(idea: IdeaClass, mode: boolean) {
    idea.nameMode = mode;
    // console.log("switching to Edit mode?", mode);
    // idea.mode = idea.mode;
    // idea = idea;
    // // updateTasks();
    updateHack++;
  }
  function init(element: HTMLInputElement) {
    element.focus();
  }

  function handleKeyDown(e, idea) {}
  let updateHack = 0;
</script>

<main>
  <ViewEditToggleText />
  <!-- {#if idea.nameMode == MODE.VIEW}
    <!- - svelte-ignore a11y-click-events-have-key-events - ->
    <h2 on:click={() => switchMode(idea, MODE.EDIT)}>{idea.name}</h2>
  {:else}
    <input
      bind:value={idea.name}
      use:init
      on:change={() => switchMode(idea, MODE.VIEW)}
      on:blur={() => switchMode(idea, MODE.VIEW)}
    />
  {/if}
  <span class="invisible">{updateHack}</span>
  <h2>TESTING</h2>
  {test} -->
</main>

<style>
  .invisible {
    visibility: hidden;
  }
</style>
