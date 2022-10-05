<script>
  import Socials from "@components/Socials.svelte";
</script>

<div class="wrapper">
  <nav class="flex justify-between align-center py-7">
    <div class="flex items-center">
      <div>
        <a href="/" class="font-bold text-2xl">Jonathan Petit</a>
      </div>
      <div class="flex items-center gap-x-5 ml-20">
        <a href="/posts" class="hover:underline">Blog</a>
        <a href="/about" class="hover:underline">About</a>
      </div>
    </div>
    <div class="">
      <Socials />
    </div>
  </nav>
</div>
