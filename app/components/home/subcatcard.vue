<template>
    


      

       

        <NuxtLink to="/ncert/books" class="card">
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

         

  
    

    
</template>
<script setup>
const {data}  = defineProps(['data'])

</script>