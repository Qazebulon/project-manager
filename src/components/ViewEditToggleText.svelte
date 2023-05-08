<script lang="ts">
  const MODE = {
    VIEW: true,
    EDIT: false,
  };
  export class ViewEditToggleTextClass {
    text: string;
    mode: boolean;
    constructor(text: string, mode = MODE.VIEW) {
      this.text = text;
      this.mode = mode;
    }
  }

  export let field: ViewEditToggleTextClass;
  let updateHack = 0;

  function switchMode(field: ViewEditToggleTextClass, mode: boolean) {
    field.mode = mode;
    updateHack++;
  }
  function init(element: HTMLInputElement) {
    element.focus();
  }
</script>

<main>
  {#if field.mode == MODE.VIEW}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <h2 on:click={() => switchMode(field, MODE.EDIT)}>{field.text}</h2>
  {:else}
    <input
      bind:value={field.text}
      use:init
      on:change={() => switchMode(field, MODE.VIEW)}
      on:blur={() => switchMode(field, MODE.VIEW)}
    />
  {/if}
  <span class="invisible">{updateHack}</span>
</main>

<style>
  .invisible {
    visibility: hidden;
  }
</style>
