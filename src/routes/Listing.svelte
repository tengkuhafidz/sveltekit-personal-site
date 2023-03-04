<script>
  import { projects } from "../content/projects";
  import ListItem from "./ListItem.svelte";
</script>

<div
  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-x-8 lg:gap-x-16 py-4"
>
  {#each projects as project}
    <ListItem {project} />
  {/each}
</div>
