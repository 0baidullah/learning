<!-- src/routes/+layout.svelte -->
<script>
  import NewNav from '$lib/+Header.svelte';
</script>

<div class="antialiased  " >
  <!-- <Header /> -->
  <NewNav />
  <!-- <Mobilenav /> -->
  <main  >
    <slot />
  </main>
  <!-- <Footer /> -->
</div>