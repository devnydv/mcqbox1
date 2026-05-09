<template>
    <section class="topic-hero">
        <div class="topic-hero-inner" v-for="(items, index) in subcatdata" :key="index">
            <div class="topic-tag fade-up"><span class="topic-tag-dot"></span> {{ items.category }}</div>
            <!-- <h1 class="fade-up fade-up-1"> <em>Books</em></h1> -->
            <h1 class="fade-up fade-up-1">{{ items.names }}</h1>
            <p class="topic-hero-desc fade-up fade-up-2">{{ items.desc }}</p>
        </div>
    </section>

    <main>

        <!-- <subcat />
        <subcat /> -->
        <!-- <LearnSec /> -->


        <div class="section" v-for="(items, index) in topicdata" :key="index">
            
            

            <div class="cards-grid">
                <div v-for="item in items" :key="item.id">
                    <subcatcard :item="item" />
                </div>
            </div>

        </div>

    </main>
</template>
<script setup>
import { isTemplateExpression } from 'typescript'


const route = useRoute()
const category = route.params.cat
const subcatpage = route.params.subcatpage

const { data: topicdata, error } = await useFetch(`/api/getalldata/gettopic/${subcatpage}`)
const { data: subcatdata } = await useFetch(`/api/v1/${category}/${subcatpage}`)
const capitalsubcat = subcatpage.charAt(0).toUpperCase() + subcatpage.slice(1)
useHead({
    title: `Chose from ${capitalsubcat} - MCQBox`,
    meta: [
        { name: 'description', content: `Explore a variety of quizzes in the ${capitalsubcat} subcategory on MCQBox. Test your knowledge and learn with our engaging multiple choice questions.` }
    ]
})
</script>