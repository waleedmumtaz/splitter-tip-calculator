<script>
  import Footer from './lib/Footer.svelte'
  import MainContent from './lib/MainContent.svelte'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="font-space-mono min-h-screen flex flex-col">
  <MainContent />
  <Footer />
</div>
