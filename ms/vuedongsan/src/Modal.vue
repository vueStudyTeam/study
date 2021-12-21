<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <img :src="원룸들[누른거].image" style="width:100%">
      <h4>{{원룸들[누른거].title}}</h4>
      <p>{{원룸들[누른거].content}}</p>
      <input v-model="month">
      <!-- <input type="checkbox" v-model="month"> -->
      <!-- <textarea v-model="month"></textarea>
      <select v-model="month"></select> -->
      <!-- <input @input="month = $event.target.value"> -->
      <p> {{ month }}개월 선택함 : {{원룸들[누른거].price * month}} 원</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name : "Modal",
  data(){
    return{
      month : '1',
    }
  },
  watch : {
    month(a){
      if (isNaN(a) == true){
        alert('숫자만 입력하라');
        this.month = 1;
      }
    },
  },
  props: {
    원룸들 : Array,
    누른거 : Number,
    모달창열렸니 : Boolean,
  },
  beforeUpdate(){
    if (this.month == 2){
      alert('2개월은 안됨')
      this.month = 3
    }
 }
}
</script>

<style>
</style>