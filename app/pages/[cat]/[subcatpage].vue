<template>
    <section class="topic-hero">
        <div class="topic-hero-inner" v-for="(items, index) in topicdata" :key="index">
            <div class="topic-tag fade-up"><span class="topic-tag-dot"></span> {{ items[0].category }}</div>
            <!-- <h1 class="fade-up fade-up-1"> <em>Books</em></h1> -->
            <h1 class="fade-up fade-up-1">{{ items[0].subcat.names }}</h1>
            <p class="topic-hero-desc fade-up fade-up-2">{{ items[0].desc }}</p>

        </div>
    </section>

    <main>

        <!-- <subcat />
        <subcat /> -->
        <!-- <LearnSec /> -->


        <div class="section" v-for="(items, index) in topicdata" :key="index">
            
            <!-- <subcatheader :subcat-name="items[0].subcat.names" :data="items" /> -->

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
const category = route.params.cat
const subcatpage = route.params.subcatpage

const { data: topicdata, error } = await useFetch(`/api/getalldata/gettopic/${subcatpage}`)

</script>