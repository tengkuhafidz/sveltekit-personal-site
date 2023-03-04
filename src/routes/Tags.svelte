<script lang="ts">
  export let tags: string[];
</script>

<div class="md:mt-1">
  {#each tags as tag}
    <span
      class="bg-slate-500 text-slate-100 text-xs px-1 py-0.5 mr-1 rounded md:text-sm"
    >
      {tag.trim()}
    </span>
  {/each}
</div>
