<script lang="ts">
  import type { Link } from "@inc/type";
  import { onMount } from "svelte";
  
  export let link: Link = { url: "", target: ""}
  export let name: string
  export let height: string = "100%"
  export let width: string = "100%"
  export let viewBox: string = "0 0 24 24"
  export let fill: string = "none"

  let iconComponent: any = null

  onMount(async () => {
    try {
      iconComponent = (await import(`../../svg/${name}.svg.svelte`)).default
    } catch (e) {
      iconComponent = "Zut! error"
    }
  })
</script>

{#if link.url }
  <a href={link.url} target={link.target}>
    <svg
      xmlns="https://www.w3.org/2000/svg"
      {viewBox}
      {height}
      {width}
      {fill}
      class=""
    >
      <svelte:component this="{iconComponent}" />
    </svg>
  </a>
{:else}
  <svg
  xmlns="https://www.w3.org/2000/svg"
  {viewBox}
  {height}
  {width}
  {fill}
  class=""
  >
    <svelte:component this="{iconComponent}" />
  </svg>
{/if}
