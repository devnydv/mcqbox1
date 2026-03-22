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
const { data } = await useFetch('/api/getcat')
console.log(data.value)

const categories = [
  { label: '🌟 Home' , path: '/' },
  { label: '🧬 Science', path: '/category/science' },
  { label: '📐 Mathematics', path: '/category/mathematics' },
  
  { label: '🧑‍⚕️ Medicine', path: '/category/medicine' }
]
console.log('Categories fetched from API:', data.value["data"])
for (let i = 0; i < data.value["data"].length; i++) {
  const cat = data.value["data"][i]
  console.log('Processing category:', cat["names"])
  categories.push({ label: cat.names, path: `/category/${cat["slug"]}` })
}
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