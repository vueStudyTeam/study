<template>


<!-- <div class="start" :class="{ end: 모달창열렸니 }"> -->
<transition name="fade">
<Modal @closeModal="모달창열렸니 = false" :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" />
</transition>

<div class="menu">
 <a v-for="(a) in 메뉴들" :key="a"> {{ a }}</a>
</div>


<Discount v-if="showDiscount == true" />


<button @click="priceSort()" >가격순정렬</button>
<button @click="sortBack()" >되돌리기</button>


<Card @openModal="모달창열렸니 = true; 누른거 = $event"
:원룸="원룸들[i]" v-for="(작명,i) in 원룸들" :key="작명" />

<!-- <Card :원룸="원룸들[1]"/>
<Card :원룸="원룸들[2]"/>
<Card :원룸="원룸들[3]"/>
<Card :원룸="원룸들[4]"/>
<Card :원룸="원룸들[5]"/>> -->

</template>

<script>

import data from './assets/oneroom.js';
import Discount from './assets/Discount.vue';
import Modal from './assets/Modal.vue';
import Card from './assets/Card.vue';


export default {
  name: 'App',
  data(){
    return {
      showDiscount : true,
      원룸들오리지널 : [...data],
      누른거 : 0,
      원룸들 : data,
      모달창열렸니 : false,
      신고수 : [0,0,0],
      메뉴들 : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },
  methods : {
    increase(){
      this.신고수 += 1;
    },
    sortBack(){ 
    this.원룸들 = [...this.원룸들오리지널];
  },
    priceSort(){
    this.원룸들.sort(function(a,b){
      return a.price - b.price
    })
  },
  },


// mounted(){
//   setInterval(()=>{
//       this.amount--;
//   }, 1000);
// }

  mounted(){
    setTimeout(()=>{
      this.showDiscount = false;
    }, 2000);
  },

  components: {
    Discount : Discount,
    Modal : Modal,
    Card : Card,
  }
}
</script>

<style>


.fade-leave-from {
  opacity: 1;
 }
.fade-leave-active {
  transition: all 1s;
 }
.fade-leave-to {
  opacity: 0;
 }

.fade-enter-from {
  transform: translateY(-1000px);
 }
.fade-enter-active {
  transition: all 1s;
 }
.fade-enter-to {
  transform: translateY(0px);
 }

body {
  margin : 0
}
div {
  box-sizing: border-box;
}

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.black-bg {
  width: 100%; height: 100%;
  background:rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width:100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img {
  width: 50%;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}

</style>
