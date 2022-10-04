<script lang="ts">
  import { onMount } from "svelte";
  
  export let name: string
  export let height: string = "100%"
  export let width: string = "100%"
  export let viewBox: string = "0 0 24 24"
  export let fill: string = "none"
  
  let Icon: any = null

  onMount(async () => {
    try {
      Icon = (await import(`../../svg/${name}.svg.svelte`)).default
    } catch (e) {
      Icon = "Zut! error"
    }
  })
</script>

<svg
  xmlns="https://www.w3.org/2000/svg"
  {viewBox}
  {height}
  {width}
  {fill}
  class=""
>
  <svelte:component this="{Icon}" />
</svg>