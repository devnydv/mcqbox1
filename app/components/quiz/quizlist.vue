<template>


    <div class="quiz-list-intro">
        <div class="quiz-list-intro-icon">🧩</div>
        <div>
            <h3>Choose a quiz to begin</h3>
            <p>Each quiz opens in a new page. No timers — answer at your own pace and learn from every explanation.</p>
        </div>
    </div>

    <div class="quiz-list-group">
        <!-- <div class="resource-group-label">🌱 Beginner</div> -->
        <div v-for="quiz in quizlistdata" :key="quiz.id">
{{ quiz.topic }}

            <NuxtLink :to="`/${quiz.category}/${quiz.subcat}/${quiz.topic}/quiz`" class="quiz-list-card">
                <div class="quiz-list-icon" style="background:rgba(61,240,200,0.1);color:var(--music);">{{ quiz.emozi }}
                </div>
                <div class="quiz-list-body">
                    <div class="quiz-list-title">{{ quiz.title }}</div>
                    <div class="quiz-list-desc">{{ quiz.desc }}</div>
                    <div class="quiz-list-meta">
                        <span class="resource-card-tag">{{ quiz.category }}</span>
                        <span class="resource-card-tag">{{ quiz.subcat }}</span>
                        <span class="resource-card-tag" style="color:var(--music);border-color:rgba(61,240,200,0.3);">🌱
                            {{ quiz.topic }}</span>
                    </div>
                </div>
                <div class="quiz-list-cta">Start →</div>
            </NuxtLink>
        </div>


    </div>



    <!-- <div class="quiz-list-group">
        <div class="resource-group-label">🔥 Advanced</div>

        <a href="topic-detail.html" class="quiz-list-card">
            <div class="quiz-list-icon" style="background:rgba(240,122,61,0.1);color:var(--accent3);">🎻</div>
            <div class="quiz-list-body">
                <div class="quiz-list-title">Counterpoint &amp; Voice Leading</div>
                <div class="quiz-list-desc">Parallel fifths, contrary motion, and the rules that gave Bach his sound.
                    Deep theory territory.</div>
                <div class="quiz-list-meta">
                    <span class="resource-card-tag">25 questions</span>
                    <span class="resource-card-tag">~22 min</span>
                    <span class="resource-card-tag" style="color:var(--accent3);border-color:rgba(240,122,61,0.3);">🔥
                        Advanced</span>
                </div>
            </div>
            <div class="quiz-list-cta">Start →</div>
        </a>
    </div> -->


</template>
<script setup>
const { quizlistdata } = defineProps(['quizlistdata'])

</script>