<template>
        <div class="topic-hero-inner">
            <div class="topic-tag fade-up"><span class="topic-tag-dot"></span> {{ categories.slug }}</div>
            <!-- <h1 class="fade-up fade-up-1"> <em>Books</em></h1> -->
            <h1 class="fade-up fade-up-1">{{ categories.names }}</h1>
            <p class="topic-hero-desc fade-up fade-up-2">{{ categories.desc }}</p>
            <!-- <div class="topic-meta-row fade-up fade-up-2">
        <span class="topic-meta-item">📋 <strong>18 questions</strong></span>
        <span class="topic-meta-item">⏱ <strong>~14 min</strong></span>
        <span class="topic-meta-item">👥 <strong>18K+ learners</strong></span>
        <span class="topic-chip">🌱 Beginner</span>
        <span class="topic-chip" style="border-color:rgba(200,240,61,0.3);background:rgba(200,240,61,0.08);color:var(--accent);">No timer</span>
      </div> -->
            <!-- <div class="topic-hero-actions fade-up fade-up-3">
        <button class="btn-primary" onclick="switchTab('quiz')">🧩 Browse Quizzes</button>
        <button class="btn-outline" onclick="switchTab('resources')">🌐 Explore Resources</button>
      </div> -->
        </div>
    

</template>

<script setup>
const route = useRoute()

const { data } = await useFetch(`/api/getcat`)
console.log('Fetched category data:', data.value)
const categories = computed(() => {
    return data.value.data?.find(
        item => item.slug === route.params.category
    ) || null
})

</script>