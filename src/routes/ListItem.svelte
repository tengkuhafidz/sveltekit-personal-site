<script lang="ts">
  import { type Project } from "../content/projects";
  import AvatarInitials from "./AvatarInitials.svelte";
  import Tags from "./Tags.svelte";

  export let project: Project;
  const { title, description, url, platform, imageUrl, tags } = project;
</script>

<a href={url} target="_blank" rel="noreferrer">
  <div
    class="border-slate-800 bg-slate-200 rounded-xl py-4 px-2 shadow-lg border border-b-8 flex"
  >
    <div class="flex-none mt-1">
      {#if imageUrl}
        <img
          src={imageUrl}
          class="h-14 w-14 rounded-xl border-2 border-white bg-slate-50 md:h-20 md:w-20 md:border-4"
          alt={`${title} logo`}
        />
      {:else}
        <AvatarInitials {title} />
      {/if}
    </div>
    <div class="px-2 grow md:px-4">
      <h1 class="text-md font-bold md:text-xl">{title}</h1>
      <p class="text-xs md:text-lg">{description}</p>
      <Tags tags={[platform, ...tags]} />
    </div>
  </div>
</a>
