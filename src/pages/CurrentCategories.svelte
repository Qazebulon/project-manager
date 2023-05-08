<script lang="ts">
  import { IdeaClass } from "../components/ideas/IdeaClass";
  import Idea from "../components/ideas/Idea.svelte";
  let idea = new IdeaClass("Example Title", "Example description...");
</script>

<div>
  <h2>Current Categories</h2>
  <ol>
    <li><h3>Discarded</h3></li>
    <li>
      <h3>Initial</h3>
      <ol>
        <li>
          <Idea {idea} />
        </li>
      </ol>
    </li>
    <li><h3>Queued</h3></li>
    <li><h3>Current</h3></li>
    <li><h3>On-Hold</h3></li>
    <li><h3>Deployed</h3></li>
  </ol>
</div>
