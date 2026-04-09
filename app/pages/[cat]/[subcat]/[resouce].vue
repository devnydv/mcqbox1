<template>
    <HeroSec />
    
</template>

<script setup>

const route = useRoute()
const category = route.params.category

const { data: topicdata, error } = await useFetch(`/api/getalldata/${category}`)
</script>