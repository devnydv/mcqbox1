<template>
  <div class="mcq-quiz">

    <!-- Header -->
    <div class="quiz-header">
      <span class="q-badge">
        Question <em>{{ currentIndex + 1 }}</em>
        <span class="q-total">/ {{ questions.length }}</span>
      </span>
      <span class="q-topic">{{ currentQuestion.topic }}</span>
    </div>

    <!-- Question Card -->
    <div :key="`q-${currentIndex}`" class="question-card">
      
      <!-- FIX: no self-closing -->
      <p class="question-text" v-html="currentQuestion.text"></p>

      <!-- FIX: proper code tag -->
      <pre v-if="currentQuestion.code" class="code-block">
        <code v-html="currentQuestion.code"></code>
      </pre>

      <div class="options-list">
        <button
          v-for="(opt, i) in currentQuestion.options"
          :key="i"
          class="option-btn"
          :class="optionClass(i)"
          :disabled="isAnswered"
          @click="selectOption(i)"
        >
          <span class="option-letter">{{ letters[i] }}</span>
          <span class="option-text">{{ opt }}</span>
        </button>
      </div>
    </div>

    <!-- Explanation -->
    <Transition name="slide-down">
      <div
        v-if="isAnswered"
        class="explanation"
        :class="isCurrentCorrect ? 'exp-correct' : 'exp-wrong'"
      >
        <span class="exp-icon">
          {{ isCurrentCorrect ? '✅' : '💡' }}
        </span>
        <div>
          <p class="exp-label">
            {{ isCurrentCorrect
              ? 'Correct!'
              : `The correct answer is ${letters[currentQuestion.correct]}` }}
          </p>
          <p class="exp-text" v-html="currentQuestion.explanation"></p>
        </div>
      </div>
    </Transition>

    <!-- Nav -->
    <div class="nav-row">
      <button class="btn-back" :disabled="currentIndex === 0" @click="goTo(currentIndex - 1)">
        ← Back
      </button>

      <button v-if="!isAnswered && !isSkipped" class="btn-skip" @click="skipQuestion">
        Skip
      </button>

      <button v-if="isLastQuestion" class="btn-submit" @click="showResults = true">
        Submit →
      </button>

      <button
        v-else
        class="btn-next"
        :disabled="!isAnswered && !isSkipped"
        @click="goTo(currentIndex + 1)"
      >
        Next →
      </button>
    </div>

    <!-- Result Overlay -->
    <Transition name="fade-up">
      <div v-if="showResults" class="overlay" @click.self="showResults = false">
        <div class="popup">
          <div class="popup-glow" />
          <div class="popup-trophy">{{ trophyEmoji }}</div>

          <h2 class="popup-title" v-html="popupTitle"></h2>
          <p class="popup-sub">{{ popupSub }}</p>

          <div class="result-bar">
            <div
              class="result-fill"
              :style="{ width: scorePercent + '%', background: barColor }"
            />
          </div>

          <div class="popup-stats">
            <div class="stat">
              <strong class="stat-correct">{{ correctCount }}</strong>
              <span>Correct</span>
            </div>
            <div class="stat">
              <strong class="stat-wrong">{{ wrongCount }}</strong>
              <span>Wrong</span>
            </div>
            <div class="stat">
              <strong class="stat-score">{{ scorePercent }}%</strong>
              <span>Score</span>
            </div>
          </div>

          <p class="popup-msg" v-html="popupMessage"></p>

          <div class="popup-actions">
            <button
              class="btn-save"
              @click="saveResults"
            >
              📥 Save Results
            </button>
            <button class="btn-retake" @click="retake">
              ↺ Try Again
            </button>
          </div>

          <button class="btn-review" @click="showResults = false">
            Review answers →
          </button>
        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup>
const route = useRoute()
const cat = route.params.cat
const subcat = route.params.subcat
const topic = route.params.topic
import { ref, computed, watchEffect } from 'vue'
const { data } = await useFetch(`/api/getallquestion/${cat}/${subcat}/${topic}/getallquiz`)

//console.log('Fetched quiz data:', data.value)
const questions = computed(() => data.value || [])
// ── Demo Questions (source of truth for now) ───────────
//  const questions = ref([
//   {
//     topic: "JavaScript Basics",
//     text: "What will <code>typeof null</code> return?",
//     options: ["null", "object", "undefined", "number"],
//     correct: 1,
//     explanation: "typeof null returns 'object'."
//   },
//   {
//     topic: "Python",
//     text: "What is the output of the following code?",
//     code: "x = [1, 2, 3]\nprint(x * 2)",
//     options: ["[2, 4, 6]", "[1, 2, 3, 1, 2, 3]", "Error", "[1, 1, 2, 2, 3, 3]"],
//     correct: 1,
//     explanation: "List multiplication repeats elements."
//   },
//   {
//     topic: "Vue",
//     text: "Which directive is used for conditional rendering?",
//     options: ["v-if", "v-for", "v-bind", "v-model"],
//     correct: 0,
//     explanation: "v-if is used for conditional rendering."
//   }
//  ])

// ── State ─────────────────────────────────────────────
const currentIndex = ref(0)
const answers = ref([])
const showResults = ref(false)

const letters = ['A', 'B', 'C', 'D']

// ── Sync answers with questions ───────────────────────
watchEffect(() => {
  if (questions.value.length) {
    answers.value = questions.value.map(() => null)
  }
})

// ── Computed ─────────────────────────────────────────
const currentQuestion = computed(() => {
  return questions.value[currentIndex.value] || null
})

const isAnswered = computed(() => {
  const a = answers.value[currentIndex.value]
  return a !== null && a !== -1
})

const isSkipped = computed(() => {
  return answers.value[currentIndex.value] === -1
})

const isCurrentCorrect = computed(() => {
  const a = answers.value[currentIndex.value]
  return a !== null && a !== -1 && a === currentQuestion.value?.correct
})

const isLastQuestion = computed(() => {
  return currentIndex.value === questions.value.length - 1
})

const correctCount = computed(() => {
  return answers.value.filter((a, i) =>
    a !== null && a !== -1 && a === questions.value[i]?.correct
  ).length
})

const wrongCount = computed(() => {
  return answers.value.filter((a, i) =>
    a !== null && a !== -1 && a !== questions.value[i]?.correct
  ).length
})

const skippedCount = computed(() => {
  return answers.value.filter(a => a === -1).length
})

const scorePercent = computed(() => {
  const done = correctCount.value + wrongCount.value
  return done > 0 ? Math.round((correctCount.value / done) * 100) : 0
})

// ── Methods ──────────────────────────────────────────
function optionClass(i) {
  const a = answers.value[currentIndex.value]
  if (a === null || a === -1) return ''

  const correct = currentQuestion.value?.correct

  if (i === a && i === correct) return 'opt-correct'
  if (i === a && i !== correct) return 'opt-wrong'
  if (i === correct) return 'opt-show-correct'

  return 'opt-dimmed'
}

function selectOption(i) {
  if (isAnswered.value) return
  answers.value[currentIndex.value] = i
}

function skipQuestion() {
  if (isAnswered.value) return
  answers.value[currentIndex.value] = -1

  if (!isLastQuestion.value) {
    setTimeout(() => goTo(currentIndex.value + 1), 250)
  }
}

function goTo(idx) {
  if (idx < 0 || idx >= questions.value.length) return
  currentIndex.value = idx
}

function retake() {
  answers.value = questions.value.map(() => null)
  currentIndex.value = 0
  showResults.value = false
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');

/* ── Tokens ───────────────────────────────────────────── */
.mcq-quiz {
  --bg:             #0d0d0f;
  --surface:        #16161a;
  --surface2:       #1e1e24;
  --border:         #2a2a35;
  --accent:         #c8f03d;
  --accent2:        #5b6af0;
  --text:           #f0f0f5;
  --muted:          #7a7a90;
  --correct:        #3df0c8;
  --correct-bg:     rgba(61,240,200,0.08);
  --correct-border: rgba(61,240,200,0.35);
  --wrong:          #f07a3d;
  --wrong-bg:       rgba(240,122,61,0.08);
  --wrong-border:   rgba(240,122,61,0.35);

  font-family: 'DM Sans', sans-serif;
  background: var(--bg);
  color: var(--text);
  max-width: 680px;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* ── Header ───────────────────────────────────────────── */
.quiz-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.q-badge {
  font-family: 'Syne', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
}
.q-badge em { font-style: normal; color: var(--accent); font-size: 1rem; }
.q-total    { opacity: 0.4; }

.q-topic {
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 600;
  border: 1px solid rgba(91,106,240,0.3);
  background: rgba(91,106,240,0.07);
  color: var(--accent2);
}

/* ── Question Card ────────────────────────────────────── */
.question-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.8rem;
  animation: cardIn 0.3s cubic-bezier(0.4,0,0.2,1) both;
}
@keyframes cardIn {
  from { opacity:0; transform:translateY(10px); }
  to   { opacity:1; transform:translateY(0); }
}

.question-text {
  font-size: 1.05rem;
  line-height: 1.65;
  margin-bottom: 1.5rem;
}
.question-text :deep(code) {
  font-family: 'Courier New', monospace;
  background: var(--surface2);
  border: 1px solid var(--border);
  padding: 0.1em 0.4em;
  border-radius: 5px;
  font-size: 0.92em;
  color: var(--accent);
}

/* ── Code Block ───────────────────────────────────────── */
.code-block {
  background: #0a0a0c;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1rem 1.2rem;
  font-family: 'Courier New', monospace;
  font-size: 0.84rem;
  color: #c8f03d;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  overflow-x: auto;
  white-space: pre;
}

/* ── Options ──────────────────────────────────────────── */
.options-list {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.option-btn {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  width: 100%;
  padding: 0.9rem 1.1rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface2);
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s, transform 0.12s;
}
.option-btn:hover:not(:disabled) {
  border-color: rgba(200,240,61,0.35);
  background: rgba(200,240,61,0.04);
  transform: translateX(3px);
}
.option-btn:disabled { cursor: default; }

.option-letter {
  width: 26px;
  height: 26px;
  border-radius: 7px;
  border: 1px solid var(--border);
  background: var(--surface);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Syne', sans-serif;
  font-size: 0.7rem;
  font-weight: 800;
  flex-shrink: 0;
  color: var(--muted);
  transition: all 0.15s;
}

.opt-correct {
  border-color: var(--correct-border);
  background: var(--correct-bg);
  animation: correctPop 0.3s cubic-bezier(0.34,1.56,0.64,1) both;
}
.opt-correct .option-letter { background: var(--correct); border-color: var(--correct); color: #0d0d0f; }
@keyframes correctPop {
  0%   { transform:scale(1); }
  50%  { transform:scale(1.02); }
  100% { transform:scale(1); }
}

.opt-wrong {
  border-color: var(--wrong-border);
  background: var(--wrong-bg);
  animation: wrongShake 0.35s ease both;
}
.opt-wrong .option-letter { background: var(--wrong); border-color: var(--wrong); color: #0d0d0f; }
@keyframes wrongShake {
  0%,100% { transform:translateX(0); }
  20%     { transform:translateX(-5px); }
  40%     { transform:translateX(4px); }
  60%     { transform:translateX(-3px); }
  80%     { transform:translateX(2px); }
}

.opt-show-correct {
  border-color: var(--correct-border);
  background: var(--correct-bg);
  opacity: 0.75;
}
.opt-show-correct .option-letter { background: var(--correct); border-color: var(--correct); color: #0d0d0f; }

.opt-dimmed { opacity: 0.32; }

/* ── Explanation ──────────────────────────────────────── */
.explanation {
  display: flex;
  gap: 0.75rem;
  padding: 1rem 1.2rem;
  border-radius: 14px;
  border: 1px solid;
}
.exp-correct { background: rgba(61,240,200,0.05); border-color: rgba(61,240,200,0.2); }
.exp-wrong   { background: rgba(240,122,61,0.05);  border-color: rgba(240,122,61,0.2); }

.exp-icon  { font-size: 1.1rem; flex-shrink: 0; padding-top: 1px; }

.exp-label {
  font-family: 'Syne', sans-serif;
  font-size: 0.82rem;
  font-weight: 800;
  margin-bottom: 0.3rem;
}
.exp-correct .exp-label { color: var(--correct); }
.exp-wrong   .exp-label { color: var(--wrong); }

.exp-text {
  font-size: 0.84rem;
  color: rgba(240,240,245,0.72);
  line-height: 1.6;
}
.exp-text :deep(code) {
  font-family: 'Courier New', monospace;
  background: var(--surface2);
  border: 1px solid var(--border);
  padding: 0.1em 0.35em;
  border-radius: 4px;
  font-size: 0.88em;
  color: var(--accent);
}

.slide-down-enter-active { animation: slideDown 0.3s cubic-bezier(0.4,0,0.2,1) both; }
.slide-down-leave-active { animation: slideDown 0.2s cubic-bezier(0.4,0,0.2,1) reverse both; }
@keyframes slideDown {
  from { opacity:0; transform:translateY(-6px); }
  to   { opacity:1; transform:translateY(0); }
}

/* ── Nav ──────────────────────────────────────────────── */
.nav-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-back,
.btn-next,
.btn-submit {
  padding: 0.75rem 1.3rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface2);
  color: var(--text);
  font-family: 'Syne', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s;
}
.btn-back:hover:not(:disabled) { border-color: var(--accent2); color: var(--accent2); }
.btn-back:disabled,
.btn-next:disabled { opacity: 0.3; cursor: not-allowed; }

.btn-next,
.btn-submit { flex: 1; text-align: center; }

.btn-next {
  border-color: rgba(200,240,61,0.3);
  background: rgba(200,240,61,0.06);
  color: var(--accent);
}
.btn-next:hover:not(:disabled) {
  background: rgba(200,240,61,0.12);
  border-color: rgba(200,240,61,0.5);
  color: var(--accent);
}

.btn-submit { background: var(--accent); border-color: var(--accent); color: #0d0d0f; }
.btn-submit:hover { opacity:0.88; transform:translateY(-1px); box-shadow:0 6px 20px rgba(200,240,61,0.25); }

.btn-skip {
  background: transparent;
  border: none;
  color: var(--muted);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0.4rem 0.5rem;
  white-space: nowrap;
  transition: color 0.15s;
}
.btn-skip:hover { color: var(--text); }

/* ── Result Overlay ───────────────────────────────────── */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(8px);
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.popup {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 22px;
  max-width: 440px;
  width: 100%;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  text-align: center;
}

.popup-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 70% 50% at 50% 0%, rgba(200,240,61,0.15), transparent 70%);
  pointer-events: none;
}

.popup-trophy { font-size: 3rem; }

.popup-title {
  font-family: 'Syne', sans-serif;
  font-size: 1.45rem;
  font-weight: 800;
  letter-spacing: -0.03em;
}
.popup-title :deep(em) { font-style: normal; color: var(--accent); }

.popup-sub { font-size: 0.83rem; color: var(--muted); margin-bottom: 0.2rem; }

.result-bar {
  width: 100%;
  height: 7px;
  border-radius: 100px;
  background: var(--surface2);
  overflow: hidden;
}
.result-fill {
  height: 100%;
  border-radius: 100px;
  transition: width 1s 0.3s cubic-bezier(0.4,0,0.2,1);
}

.popup-stats {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 0.5rem;
  width: 100%;
}
.stat {
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0.8rem 0.5rem;
}
.stat strong { display:block; font-family:'Syne',sans-serif; font-size:1.3rem; font-weight:800; }
.stat span   { font-size:0.65rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.05em; }
.stat-correct { color: var(--correct); }
.stat-wrong   { color: var(--wrong); }
.stat-score   { color: var(--accent); }

.popup-msg {
  font-size: 0.82rem;
  color: var(--muted);
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.8rem 1rem;
  line-height: 1.55;
  width: 100%;
}
.popup-msg :deep(strong) { color: var(--text); }

.popup-actions { display:flex; flex-direction:column; gap:0.5rem; width:100%; margin-top:0.2rem; }

.btn-save {
  width: 100%;
  padding: 0.85rem;
  border-radius: 12px;
  border: none;
  background: var(--accent);
  color: #0d0d0f;
  font-family: 'Syne', sans-serif;
  font-size: 0.92rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.18s;
}
.btn-save:hover { opacity:0.88; transform:translateY(-1px); }

.btn-retake {
  width: 100%;
  padding: 0.8rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  font-family: 'Syne', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s;
}
.btn-retake:hover { border-color:var(--accent2); color:var(--accent2); }

.btn-review {
  background: none;
  border: none;
  color: var(--muted);
  font-size: 0.75rem;
  cursor: pointer;
  margin-top: 0.2rem;
  transition: color 0.15s;
}
.btn-review:hover { color: var(--text); }

.fade-up-enter-active { transition: opacity 0.28s, transform 0.32s cubic-bezier(0.34,1.56,0.64,1); }
.fade-up-leave-active { transition: opacity 0.2s, transform 0.2s ease; }
.fade-up-enter-from,
.fade-up-leave-to     { opacity:0; transform:scale(0.96) translateY(14px); }

/* ── Responsive ───────────────────────────────────────── */
@media (max-width: 560px) {
  .mcq-quiz    { padding: 1rem; }
  .question-card { padding: 1.3rem; }
  .popup       { padding: 1.5rem 1.2rem; }
}
</style>