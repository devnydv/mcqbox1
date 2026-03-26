<template>
    {{category}}
</template>

<script setup>
const category = useRoute().params.subject
</script>