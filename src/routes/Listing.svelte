<script>
  import { projects } from "../content/projects";
  import ListItem from "./ListItem.svelte";
</script>

<div
  class="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-6 py-4 max-w-2xl lg:max-w-5xl mx-auto"
>
  {#each projects as project}
    <ListItem {project} />
  {/each}
</div>
