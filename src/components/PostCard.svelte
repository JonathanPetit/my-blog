<script lang="ts">
  import Tag from "@components/global/Tag.svelte";
  import type { PostMetadata } from "@inc/type";

  export let metadata: PostMetadata
</script>

<div class="border-2 border-black rounded-lg">
  <a href="/posts/{metadata.id}" class="flex">
    {#if metadata.img}
      <div>
        <img class="max-w-fit" alt={metadata.img.alt} src={metadata.img.src} />
      </div>
    {/if}
    <div class="p-2">
      <div class="flex gap-x-2">
        {#each metadata.tags as tag }
          <Tag label={tag} />
        {/each}
      </div>
      <div class="mt-3">
        <p>{metadata.title}<p>
        <p>{metadata.date}</p>
        <p>{metadata.resume}</p>
      </div>
    </div>
  </a>
</div>