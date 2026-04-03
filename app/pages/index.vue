<template>

    <NuxtRouteAnnouncer />
    <Hero />
    <main>

        <subcat :data="data" />
        <!-- <subcat />
        <subcat /> -->
        <!-- <LearnSec /> -->



        <div v-for="(items, category) in groupedProducts" :key="category">
            
            <div v-for="item in items" :key="item.id">
                <h2>{{ item.subcat.names }}</h2>
                <subcat :item="item" />
                
            
            
        </div>
        </div>

    </main>





</template>
<style>
main {
    padding: 3rem 2rem 4rem;
    max-width: 1280px;
    margin: 0 auto;
}

@media (max-width: 768px) {
    main {
        padding: 2rem 1.25rem 3rem;
    }

    .section {
        margin-bottom: 2.5rem;
    }

    .guides-grid {
        grid-template-columns: 1fr 1fr;
    }
}
</style>
<script setup>
const { data } = await useFetch('/api/getsubcat')
console.log(data.value)
const groupedProducts = computed(() => {
    if (!data.value) return {}

    return data.value.data.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = []
        }

        acc[item.category].push(item)
        return acc
    }, {})
})

</script>