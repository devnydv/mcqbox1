<template>
  
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    
    
</template>

<script setup>


</script>



<style>
:root {
      --bg: #0d0d0f;
      --surface: #16161a;
      --surface2: #1e1e24;
      --border: #2a2a35;
      --accent: #c8f03d;
      --accent2: #5b6af0;
      --accent3: #f07a3d;
      --accent4: #3df0c8;
      --text: #f0f0f5;
      --muted: #7a7a90;
      --card-hover: #1e1e28;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      overflow-x: hidden;
    }

</style>
