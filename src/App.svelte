<script lang="ts">
  import Navigation from "./components/Navigation.svelte";
</script>

<main>
  <div class="top">
    <h1>JStoner Project Manager</h1>
    <p>
      Purpose: I want to have some simple automation around my (currently
      manual) process for managing projects...
    </p>
  </div>
  <Navigation />
  <!-- <Todos /> -->

  <!-- <div>
    <h2>Actions</h2>
    <ul>
      <li>View Documentation</li>
      <hr />
      <li>Create new Idea</li>
      <li>List existing Ideas</li>
      <!- - <li>View existing Idea</li> - ->
      <li>Revise (view/edit) existing Idea</li>
      <!- - <li>Move idea (Discarded, Backlog, Queued)</li> - ->
      <li>Discard (archive) Idea</li>
      <li>Queue (mark as ready) Idea</li>
      <hr />
      <li>Prioritize queued Ideas</li>
      <li>Promote to Current (active ideas are limited)</li>
      <hr />
      <li>...</li>
    </ul>
  </div> -->

  <!-- <div>
    <h2>Current Categories</h2>
    <ol>
      <li><h3>Discarded</h3></li>
      <li>
        <h3>Initial</h3>
        <ol>
          <li>
            <Idea title="Example Title" description="Example description..." />
          </li>
        </ol>
      </li>
      <li><h3>Queued</h3></li>
      <li><h3>Current</h3></li>
      <li><h3>On-Hold</h3></li>
      <li><h3>Deployed</h3></li>
    </ol>
  </div>

  <div>
    <h2>Template</h2>
    <h3>Project Name</h3>
    <ol>
      <li>Goals</li>
      <li>Idea</li>
      <li>Repo</li>
      <li>Scratch</li>
      <li>Feedback</li>
    </ol>
  </div> -->
</main>

<style>
  .top {
    text-align: center;
    font-style: italic;
  }
</style>
