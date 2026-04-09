<template>
    <section class="topic-hero">
    <catheader/>
    </section>
    <main>
        <!-- <subcat />
        <subcat /> -->
        <!-- <LearnSec /> -->


        <div class="section" v-for="( items, index) in topicdata" :key="index">
            
             <subcatheader :subcat-name="items[0].subcat.names" :data="items" />
             
            <div class="cards-grid">
                <div v-for="item in items" :key="item.id">
                    <subcatcard :item="item" />
                </div>
            </div>
 
        </div>

    </main>
    
</template>

<script setup>
const route = useRoute()
const category = route.params.category

const { data: topicdata, error } = await useFetch(`/api/getalldata/${category}`)




//const { groupedProducts } = await useFetch(`/api/getalldata`)

// const route = useRoute()
// const { data } = await useFetch('/api/gettopics')

// const groupedProducts = computed(() => {
//     if (!data.value) return {}

//     return data.value.data.reduce((acc, item) => {
//         if (!acc[item.subcat.names]) {
//             acc[item.subcat.names] = []
//         }

//         acc[item.subcat.names].push(item)
//         return acc
//     }, {})
// })




</script>