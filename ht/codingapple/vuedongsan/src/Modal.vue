<template>
<div class="black-bg" v-if="modalYn == true">
  <div class="white-bg">
    <h4>{{products[modalDataIdx].title}}</h4>
    <p>상세페이지내용임</p>
    <button>닫기</button>
  </div>
</div>
 
</template>

<script>
export default {
    name:'Modal',
    props:{
        products : Array,
        modalYn : Boolean,
        modalDataIdx : Number
    },
}
</script>
