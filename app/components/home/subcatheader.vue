<template>
    <div class="section-header">
        <div class="section-header-left">
            <div class="section-title">
                <span class="dot" style="background:var(--accent);"></span>
                {{ subcatName }}
                {{ data[0].category }}
            </div>
            <div class="section-subtitle">Explore NCERT textbooks and resources</div>
        </div>
        <NuxtLink class="see-all" :to="`/category/${data[0].category}/${data[0].subcat.slug}`">See all →</NuxtLink>
        
    </div>
</template>

<script setup>
const props = defineProps({
    subcatName: {
        type: String,
        required: true
    },
    data: {
        type: Array,
        required: true
    }
})

</script>