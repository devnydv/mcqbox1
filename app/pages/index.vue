<template>

    <NuxtRouteAnnouncer />
    <Hero />
    <main>

        <!-- <subcat :data="data" /> -->
        <!-- <subcat />
        <subcat /> -->
        <!-- <LearnSec /> -->


        <div class="section" v-for="([subcatName, items], index) in Object.entries(groupedProducts).slice(0, 4)"
            :key="subcatName">
            <subcatheader :subcat-name="subcatName" :data="items" />
            <div class="cards-grid">
                <div v-for="item in items.slice(0, 4)" :key="item.id">
                    <subcatcard :item="item" />
                </div>
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
const { data } = await useFetch('/api/gettopics')

const groupedProducts = computed(() => {
    if (!data.value) return {}
    
    return data.value.data.reduce((acc, item) => {
        if (!acc[item.subcat.names]) {
            acc[item.subcat.names] = []
        }

        acc[item.subcat.names].push(item)
        return acc
    }, {})
})


// const { data } = await useFetch('/api/getsubcat')

// const groupedBySlug = computed(() => {
//   if (!data.value) return {}

//   return data.value.data.reduce((acc, item) => {
//     const slug = item.subcat?.slug || 'unknown'

//     if (!acc[slug]) {
//       acc[slug] = []
//     }

//     acc[slug].push(item)

//     return acc
//   }, {})
// })
</script>