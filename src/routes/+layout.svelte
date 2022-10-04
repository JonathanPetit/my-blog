<script lang="ts">
  import "../app.css";
  
  import Header from "@components/layout/Header.svelte";
  import Footer from "@components/layout/Footer.svelte";
</script>

<div class="bg-g">
  <Header />
  <slot />
  <Footer />
</div>
