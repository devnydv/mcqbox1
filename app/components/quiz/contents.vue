<template>

  <div class="resource-intro">
    <div class="resource-intro-icon">💡</div>
    <div>
      <h3>Read first, quiz second</h3>
      <p>We've hand-picked the best free resources from around the web. Spend a few minutes with these before taking the
        quiz — you'll retain much more, and wrong answers will actually teach you something.</p>
    </div>
  </div>

  <div class="resource-group" v-for="([items], index) in content" :key="index">
    
    <NuxtLink :to="items.link" target="_blank" rel="noopener" class="resource-card">
      <div class="resource-card-icon" style="background:rgba(91,106,240,0.1)">{{ items.emoji }}</div>
      <div class="resource-card-body">
        <div class="resource-card-title">{{ items.title }}</div>
        <div class="resource-card-desc">{{ items.desc }}</div>
        <div class="resource-card-meta">
          <span class="resource-card-tag" v-for="chip in items.chip" :key="chip">{{ chip }}</span>
          <!-- <span class="resource-card-tag">{{items.courceprice}}</span>
                <span class="resource-card-source">🔗 khanacademy.org</span> -->
        </div>
      </div>
      <div class="resource-card-arrow">→</div>
    </NuxtLink>
    
    <!-- <div class="resource-group-label">📘 Start Here — Core Concepts</div> -->
    <!-- <a href="https://www.musictheory.net/lessons" target="_blank" rel="noopener" class="resource-card">
      <div class="resource-card-icon" style="background:rgba(61,240,200,0.1)">🎵</div>
      <div class="resource-card-body">
        <div class="resource-card-title">The Complete Music Theory Lessons</div>
        <div class="resource-card-desc">Interactive, structured lessons covering notes, intervals, scales, and chords
          from the ground up. The best single starting point for beginners.</div>
        <div class="resource-card-meta"><span class="resource-card-tag">Interactive</span><span
            class="resource-card-tag">Free</span><span class="resource-card-source">🔗 musictheory.net</span></div>
      </div>
      <div class="resource-card-arrow">→</div>
    </a>
    <a href="https://www.khanacademy.org/humanities/music" target="_blank" rel="noopener" class="resource-card">
      <div class="resource-card-icon" style="background:rgba(91,106,240,0.1)">📖</div>
      <div class="resource-card-body">
        <div class="resource-card-title">Music — Khan Academy</div>
        <div class="resource-card-desc">Video-based lessons on reading music, rhythm, melody, and harmony. Calm,
          structured — great if you prefer watching over reading.</div>
        <div class="resource-card-meta"><span class="resource-card-tag">Video</span><span
            class="resource-card-tag">Free</span><span class="resource-card-source">🔗 khanacademy.org</span></div>
      </div>
      <div class="resource-card-arrow">→</div>
    </a> -->
  </div>

  <!-- <div class="resource-group">
          <div class="resource-group-label">🎼 Go Deeper — Specific Topics</div>
          <a href="https://www.musicnotes.com/now/tips/music-theory-basics/" target="_blank" rel="noopener" class="resource-card">
            <div class="resource-card-icon" style="background:rgba(200,240,61,0.1)">🎹</div>
            <div class="resource-card-body">
              <div class="resource-card-title">Music Theory Basics: Notes and Staff</div>
              <div class="resource-card-desc">Clear visual guide to reading notes on a staff, treble and bass clef, and time signatures. Perfect before the quiz.</div>
              <div class="resource-card-meta"><span class="resource-card-tag">Article</span><span class="resource-card-tag">~8 min</span><span class="resource-card-source">🔗 musicnotes.com</span></div>
            </div>
            <div class="resource-card-arrow">→</div>
          </a>
          <a href="https://en.wikipedia.org/wiki/Music_theory" target="_blank" rel="noopener" class="resource-card">
            <div class="resource-card-icon" style="background:rgba(240,122,61,0.1)">📚</div>
            <div class="resource-card-body">
              <div class="resource-card-title">Music Theory — Wikipedia Overview</div>
              <div class="resource-card-desc">A comprehensive overview of history, notation, pitch, harmony, rhythm, and form. Great for filling gaps after your first read.</div>
              <div class="resource-card-meta"><span class="resource-card-tag">Reference</span><span class="resource-card-tag">Free</span><span class="resource-card-source">🔗 wikipedia.org</span></div>
            </div>
            <div class="resource-card-arrow">→</div>
          </a>
          <a href="https://www.teoria.com/" target="_blank" rel="noopener" class="resource-card">
            <div class="resource-card-icon" style="background:rgba(61,240,200,0.1)">🎧</div>
            <div class="resource-card-body">
              <div class="resource-card-title">Teoria — Music Theory Exercises and Tutorials</div>
              <div class="resource-card-desc">Ear training, interval identification, and chord building exercises with audio. Excellent alongside theory knowledge.</div>
              <div class="resource-card-meta"><span class="resource-card-tag">Interactive</span><span class="resource-card-tag">Audio</span><span class="resource-card-source">🔗 teoria.com</span></div>
            </div>
            <div class="resource-card-arrow">→</div>
          </a>
        </div>

        <div class="resource-group">
          <div class="resource-group-label">🎯 Quick Reference — Cheatsheets</div>
          <a href="https://www.studybass.com/lessons/reading-music/music-theory-cheat-sheet/" target="_blank" rel="noopener" class="resource-card">
            <div class="resource-card-icon" style="background:rgba(91,106,240,0.1)">📋</div>
            <div class="resource-card-body">
              <div class="resource-card-title">Music Theory Cheat Sheet</div>
              <div class="resource-card-desc">A compact, printable cheatsheet covering key signatures, intervals, and common chord types. Scan this right before the quiz.</div>
              <div class="resource-card-meta"><span class="resource-card-tag">Cheatsheet</span><span class="resource-card-tag">~3 min</span><span class="resource-card-source">🔗 studybass.com</span></div>
            </div>
            <div class="resource-card-arrow">→</div>
          </a>
        </div> -->

  <!-- <div style="text-align:center;padding:1rem 0 0.5rem">
          <button class="btn-primary" onclick="switchTab('quiz')">Browse Quizzes 🧩</button>
        </div> -->

</template>
<script setup>
const { content } = defineProps(['content'])
</script>