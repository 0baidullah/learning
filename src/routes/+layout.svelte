<!-- src/routes/+layout.svelte -->
<script>
  import '../app.css'; // if you have global styles
  import NewNav from '$lib/+Header.svelte';
  import '../app.css';
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