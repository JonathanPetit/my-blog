<script lang="ts">
  import type { Post } from "@inc/type";
  import Tag from "@components/global/Tag.svelte";
  import { posts } from "@store/posts";
  import { getPost } from '@utils/posts';

  export let data: any 
  let id: string = data.id

  let post: Post
  posts.subscribe(postsList => {
    post = getPost(postsList, id)
  })

</script>

<div>
  {#if post.content && post.metadata }
    <div>
      <p>{post.metadata.title}</p>
      <p>{post.metadata.date}</p>
      <div class="flex gap-x-2">
        {#each post.metadata.tags as tag }
          <Tag label={tag} />
        {/each}
      </div>
    </div>
    {#if post.metadata.img }
      <div>
        <img src={post.metadata.img.src} alt={post.metadata.img.alt} />
      </div>
    {/if}
    <svelte:component this={post.content} />
  {:else}
    Error
  {/if}
</div>