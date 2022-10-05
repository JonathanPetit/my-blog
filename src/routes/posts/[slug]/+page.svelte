<script lang="ts">
  import type { Post } from "@inc/type";
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
  {#if post.content }
    <svelte:component this={post.content} />
  {:else}
    Error
  {/if}
</div>