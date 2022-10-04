<script lang="ts">
  import Intro from "@components/home/Intro.svelte";
  import { posts } from '@store/posts';

  let postsList: any[]
  posts.subscribe(value => {
		postsList = value;
	});

</script>

<div class="wrapper">
  <Intro />
  {#each postsList as post, idx (idx)}
    <svelte:component this={post.content} />
  {/each}
</div>

