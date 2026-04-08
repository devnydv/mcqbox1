<template>
    



      

        <NuxtLink :to="`/${item.category}/${item.subcat.slug}/${item.slug}/`" class="card">
          <div class="card-img" style="background:linear-gradient(135deg,#1a1000,#3d2800,#6b4500);">
            <div class="card-img-text">{{item.emoji}}</div>
          </div>
          <div class="card-body">
            <div class="card-title">{{item.names}}</div>
            <div class="card-desc">{{item.desc}}</div>
            <div class="card-meta" >
              <span>📋 {{ item.count[0] }} Chapters</span>
              
              <span>⏱ {{ item.count[1] }} MCQs</span> 
            </div>
            <div class="card-chips">
              <!-- <span class="card-chip" style="color:#3df0c8;border-color:rgba(61,240,200,0.3);background:rgba(61,240,200,0.07);">🌱 Beginner</span> -->
              <span class="card-chip" style="color:#3df0c8;border-color:rgba(61,240,200,0.3);background:rgba(61,240,200,0.07);">{{item.category}}</span>
            </div>
            <!-- <div class="card-actions">
              <button class="card-btn-learn">📖 Quick Guide</button>
              <button class="card-btn-quiz">▶ Start Quiz</button>
            </div> -->
          </div>
        </NuxtLink>

         

  
    

    
</template>
<script setup>
const {item}  = defineProps({item: {
        type: Object,
        required: true
    }})

</script>