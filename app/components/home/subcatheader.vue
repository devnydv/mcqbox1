<template>
    <div class="section-header">
        <div class="section-header-left">
            <div class="section-title">
                <span class="dot" style="background:var(--accent);"></span>
                {{ subcatName }}
                
            </div>
            <div class="section-subtitle">{{ data[0].subcat.desc    }}</div>
        </div>
        <NuxtLink class="see-all" :to="`/${data[0].category}/${data[0].subcat.slug}`">See all →</NuxtLink>
        
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