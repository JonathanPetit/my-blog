<script lang="ts">
  import { ButtonE } from "@inc/type";

  export let label: string
  export let type: ButtonE
  export let link: string = '#'
</script>

<div class="w-fit border-2 border-white rounded-lg">
  <div class="p-2">
    {#if type === ButtonE.Button}
      <button>{label}button</button>
    {:else if type === ButtonE.Link}
      <a href={link}>{label}link</a>
    {/if}
  </div>
</div>