<template>
    <section class="topic-hero">

        <div class="topic-hero-inner" v-for="(items, index) in topicdata" :key="index">
            
                <div class="topic-tag fade-up">
                    <span class="topic-tag-dot"></span> {{ items.subcat }}
                </div>
                <!-- <h1 class="fade-up fade-up-1"> <em>Books</em></h1> -->
                 
                <h1 class="fade-up fade-up-1"><span >{{ items.emozi }}</span> {{ items.names }}</h1>
                <p class="topic-hero-desc fade-up fade-up-2">{{ items.desc }}</p>
            
        </div>
    </section>
    <div class="page-layout">
        <div class="content-area">
            <div class="tab-bar">
                <button class="tab-btn" :class="{ active: activeTab === 'resources' }" @click="activeTab = 'resources'">
                    🌐 Resources
                </button>

                <button class="tab-btn" :class="{ active: activeTab === 'quiz' }" @click="activeTab = 'quiz'">
                    🧩 Take the Quiz
                </button>
            </div>
            <div class="tab-panel" :class="{ active: activeTab === 'resources' }" id="panel-resources">
                <contents :content="content" />
            </div>
            <div class="tab-panel" :class="{ active: activeTab === 'quiz' }" id="panel-quiz">
                <quizlist :quizlistdata="quizlistdata" />
            </div>
        </div>
        <asidediv />
    </div>


</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('resources')

const route = useRoute()

const cat = route.params.cat
const subcat = route.params.subcat
const topic = route.params.resource

//const { data: content, error } = await useFetch(`/api/getalldata/getcontent/${topic}`)
const { data: topicdata } = await useFetch(`/api/v1/${cat}/${subcat}/${topic}`)
const { data: content, error } = await useFetch(`/api/getalldata/${cat}/${subcat}/${topic}`)
const { data: quizlistdata, quizerror } = await useFetch(`/api/getallquizlist/${cat}/${subcat}/${topic}/quizlist`)

</script>