<!-- src/routes/+layout.svelte -->
<script>
  import '../app.css';
  import NewNav from '$lib/+Header.svelte';
</script>

<div class="  " >
  <!-- <Header /> -->
  <NewNav />
  <!-- <Mobilenav /> -->
  <main  >
    <slot />
  </main>
  <!-- <Footer /> -->
</div>