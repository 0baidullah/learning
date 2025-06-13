<!-- src/routes/+layout.svelte -->
<script>
  import NewNav from '$lib/+Header.svelte';
    import '../app.css';
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