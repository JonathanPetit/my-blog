<script lang="ts">
  import type { Page } from "@inc/type"
  import { pages } from "@store/pages";
  import { getPage } from "@utils/pages";

  let about: Page
  pages.subscribe(pagesList => {
    about = getPage(pagesList, "about")
  })
</script>

<div>
  {#if about.content }
  <svelte:component this={about.content} />
  {:else}
    Error
  {/if}
</div>