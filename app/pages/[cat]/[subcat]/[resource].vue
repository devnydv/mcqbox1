<template>
     <section class="topic-hero">
        <div class="topic-hero-inner" v-for="(items, index) in content" :key="index">
            <div class="topic-tag fade-up"><span class="topic-tag-dot"></span> sdfgdfg</div>
            <!-- <h1 class="fade-up fade-up-1"> <em>Books</em></h1> -->
            <h1 class="fade-up fade-up-1">sdfgsdfg</h1>
            <p class="topic-hero-desc fade-up fade-up-2">sfgsdfg</p>
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
                <contents />
            </div>
            <div class="tab-panel" :class="{ active: activeTab === 'quiz' }" id="panel-quiz">
                <quizlist />
            </div>
        </div>
        <asidediv />
    </div>


</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('resources')

const route = useRoute()

const topic = route.params.resource
console.log('Current topic:', topic)
const { data: content, error } = await useFetch(`/api/getalldata/getcontent/${topic}`)
</script>