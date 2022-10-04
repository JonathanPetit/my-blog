<script lang="ts">
  import Tag from "@components/global/Tag.svelte";
  import type { Post } from "@inc/type";

  export let post: Post
</script>

<div class="border-2 border-white rounded-lg bg-s">
  <div class="flex">
    {#if post.metadata.img}
      <div>
        <img class="max-w-fit" alt={post.metadata.img.alt} src={post.metadata.img.src} />
      </div>
    {/if}
    <div class="p-2">
      <div class="flex gap-x-2">
        {#each post.metadata.tags as tag }
          <Tag label={tag} />
        {/each}
      </div>
      <div class="mt-3">
        <p>{post.metadata.title}<p>
        <p>{post.metadata.date}</p>
        <p>{post.metadata.resume}</p>
      </div>
    </div>
  </div>
</div>