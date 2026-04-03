<template>
    <div class="section">
      <div class="section-header">
        <div class="section-header-left">
          <div class="section-title">
            <span class="dot" style="background:var(--accent);"></span>
            Ncert Books
            
          </div>
          <div class="section-subtitle">Explore NCERT textbooks and resources</div>
        </div>
        <a class="see-all" href="#">See all →</a>
      </div>
      <div class="cards-grid">

        <NuxtLink to="/category/ncert/books" class="card">
          <div class="card-img" style="background:linear-gradient(135deg,#1a1000,#3d2800,#6b4500);">
            <div class="card-img-text">🧠</div>
          </div>
          <div class="card-body">
            <div class="card-title">General Knowledge Starter</div>
            <div class="card-desc">A relaxed mix of everyday facts — the perfect first quiz if you just want to dip your toes in.</div>
            <div class="card-meta">
              <span>📋 8 Chapters</span>
              <span>⏱ 6 MCQs</span>
            </div>
            <div class="card-chips">
              <span class="card-chip" style="color:#3df0c8;border-color:rgba(61,240,200,0.3);background:rgba(61,240,200,0.07);">🌱 Beginner</span>
              <span class="card-chip" style="color:#3df0c8;border-color:rgba(61,240,200,0.3);background:rgba(61,240,200,0.07);">General</span>
            </div>
            <!-- <div class="card-actions">
              <button class="card-btn-learn">📖 Quick Guide</button>
              <button class="card-btn-quiz">▶ Start Quiz</button>
            </div> -->
          </div>
        </NuxtLink>

        <NuxtLink to="/category/ncert/books" class="card">
          <div class="card-img" style="background:linear-gradient(135deg,#1a1000,#3d2800,#6b4500);">
            <div class="card-img-text">📖</div>
          </div>
          <div class="card-body">
            <div class="card-title">Classic Literature Basics</div>
            <div class="card-desc">Shakespeare, Austen, Tolstoy — explore themes, characters, and literary devices. Start anywhere.</div>
            <div class="card-meta">
              <span>📋 8 Chapters</span>
              <span>⏱ 6 MCQs</span>
            </div>
            <div class="card-chips">
              <span class="card-chip" style="color:#3df0c8;border-color:rgba(61,240,200,0.3);background:rgba(61,240,200,0.07);">🌱 Beginner</span>
              <span class="card-chip" style="color:#f07a3d;border-color:rgba(240,122,61,0.3);background:rgba(240,122,61,0.07);">Literature</span>
            </div>
            <!-- <div class="card-actions">
              <button class="card-btn-learn">📖 Quick Guide</button>
              <button class="card-btn-quiz">▶ Start Quiz</button>
            </div> -->
          </div>
        </NuxtLink>

        <NuxtLink to="/category/ncert/books" class="card">
          <div class="card-img" style="background:linear-gradient(135deg,#1a1000,#3d2800,#6b4500);">
            <div class="card-img-text">🎵</div>
          </div>
          <div class="card-body">
            <div class="card-title">Music Theory Basics</div>
            <div class="card-desc">Notes, chords, scales, and rhythm — the building blocks of all music. No musical experience needed.</div>
            <div class="card-meta">
              <span>📋 8 Chapters</span>
              <span>⏱ 6 MCQs</span>
            </div>
            <div class="card-chips">
              <span class="card-chip" style="color:#3df0c8;border-color:rgba(61,240,200,0.3);background:rgba(61,240,200,0.07);">🌱 Beginner</span>
              <span class="card-chip" style="color:#3df0c8;border-color:rgba(61,240,200,0.3);background:rgba(61,240,200,0.07);">Music</span>
            </div>
            <!-- <div class="card-actions">
              <button class="card-btn-learn">📖 Quick Guide</button>
              <button class="card-btn-quiz">▶ Start Quiz</button>
            </div> -->
          </div>
        </NuxtLink>

        <NuxtLink to="/category/world-geography/books" class="card">
          <div class="card-img" style="background:linear-gradient(135deg,#2b1a00,#5c3600,#8b4513);">
            <div class="card-img-text">🌍</div>
          </div>
          <div class="card-body">
            <div class="card-title">World Geography</div>
            <div class="card-desc">Capitals, rivers, mountain ranges, and political borders. Learn at your own pace — no map required.</div>
            <div class="card-meta">
              <span>📋 8 Chapters</span>
              <span>⏱ 6 MCQs</span>
            </div>
            <div class="card-chips">
              <span class="card-chip" style="color:#c8f03d;border-color:rgba(200,240,61,0.3);background:rgba(200,240,61,0.07);">Medium</span>
              <span class="card-chip" style="color:#5b6af0;border-color:rgba(91,106,240,0.3);background:rgba(91,106,240,0.07);">Geography</span>
            </div>
            <!-- <div class="card-actions">
              <button class="card-btn-learn">📖 Quick Guide</button>
              <button class="card-btn-quiz">▶ Start Quiz</button>
            </div> -->
          </div>
        </NuxtLink>

      </div>
    </div>

    
</template>
<script setup>
const {data}  = defineProps(['data'])

</script>