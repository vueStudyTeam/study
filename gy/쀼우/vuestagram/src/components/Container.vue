<template>
  <div>
    
    <div v-if="step ==0">
    <Post :게시물="게시물[i]" v-for="(a,i) in 게시물" :key= "i" />
    </div>

    <div v-if="step == 1">
  <div class="upload-image" :style="`background-image:url(${이미지})`"></div>
  <div class="filters">
    <FilterBox :이미지="이미지" v-for="a in 필터들" :key="a"> </FilterBox>
  </div>
</div>
    <div class="filters">
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
  </div>
  </div>

  <div v-if="step ==2">
  <div class="upload-image"></div>
  <div class="write">
    <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
    <textarea class="write-box">write!</textarea>
  </div>

  <div v-if="step == 3">
  <MyPage/>
</div>

  </div>


</template>

<script>

import Post from './Post.vue'

export default {
    components : {
        Post,
    },
    props : {
        게시물 : Array,
        step : Number,
        이미지 : String,
    }
}
</script>

<style>

</style>