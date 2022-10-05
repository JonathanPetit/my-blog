<script lang="ts">
  import Intro from "@components/home/Intro.svelte";
  import PostCard from "@components/PostCard.svelte";
  import { posts } from '@store/posts';

  let postsList: any[]
  posts.subscribe(value => {
		postsList = value;
	});

</script>

<Intro />
<div class="grid gap-4 grid-cols-2">
  {#each postsList as post, idx (idx)}
    <PostCard metadata={post.metadata} />
  {/each}
</div>
