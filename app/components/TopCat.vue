<template>
  <div class="category-bar">
    <NuxtLink
      v-for="(category, index) in categories"
      :key="index"
      :to="category.path"
      class="chip"
      :class="{ active: isActive(category.path) }"
    >
      {{ category.label }}
    </NuxtLink>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const categories = [
  { label: '🌟 Home', path: '/' },
  { label: '💻 Programming', path: '/category/programming' },
  { label: '🧬 Science', path: '/category/science' },
  { label: '📐 Mathematics', path: '/category/mathematics' },
  { label: '📚 Literature', path: '/category/literature' },
  { label: '🌍 Geography', path: '/category/geography' },
  { label: '🏛️ History', path: '/category/history' },
  { label: '🎨 Art & Design', path: '/category/art-design' },
  { label: '🎵 Music', path: '/category/music' },
  { label: '🏋️ Sports', path: '/category/sports' },
  { label: '🧠 General Knowledge', path: '/category/general-knowledge' },
  { label: '⚗️ Chemistry', path: '/category/chemistry' },
  { label: '🧑‍⚕️ Medicine', path: '/category/medicine' }
]

function isActive(path) {
  return route.path === path
}
</script>



<style>
.category-bar {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.9rem 2rem;
    overflow-x: auto;
    border-bottom: 1px solid var(--border);
    background: var(--surface);
    scrollbar-width: none;
}

.category-bar::-webkit-scrollbar {
    display: none;
}

.chip {
    flex-shrink: 0;
    padding: 0.4rem 1rem;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid var(--border);
    background: var(--surface2);
    color: var(--muted);
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
    text-decoration: none;
}

.chip:hover {
    border-color: var(--accent);
    color: var(--accent);
}

.chip.active {
    background: var(--accent);
    color: var(--bg);
    border-color: var(--accent);
    font-weight: 700;
}
</style>