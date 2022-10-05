<script lang="ts">
  import type { Icon } from "@inc/type";
  import Svg from "@components/global/Svg.svelte";

  const socials: Icon[] = [
    {
      name: "github",
      link: {
        url: "https://github.com/JonathanPetit",
        target: "_blank"
      },
      width: "30px"
    },
    {
      name: "linkedin",
      link: {
        url: "https://www.linkedin.com/in/jonathan-petit16/",
        target: "_blank"
      },
      width: "30px"
    },
    {
      name: "mail",
      link: {
        url: "mailto:petit.jonathan16@gmail.com",
        target: "_blank"
      },
      width: "35px"
    },
  ]
</script>

<div class="flex gap-2 justify-center">
  {#each socials as social, idx (idx)}
    <Svg {...social} />
  {/each}
</div>