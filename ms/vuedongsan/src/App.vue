<template>

  <!-- <div v-if="1 == 2">
    안녕하세요
  </div>
  <div v-else-if="1 == 3">
    안녕하세요2
  </div> -->



  <!-- <div class="start" :class="{ end : 모달창열렸니 }"></div> -->
  
  <transition name="fade">
    <Modal @closeModal="모달창열렸니 = false" :원룸들="원룸들" 
    :누른거="누른거" :모달창열렸니="모달창열렸니"/>
  </transition>


  <div class="menu">
    <a v-for="menu in 메뉴들" :key="menu">{{ menu }}</a>
  </div>

  <Discount :amount="amount" />

  <button @click="priceSort">가격순정렬</button>
  <button @click="priceDisSort">가격역순정렬</button>
  <button @click="titleABC">가나다순정렬</button>
  <button @click="pricefilter">50만원이하상품</button>
  <button @click="sortBack">되돌리기</button>

  <Card @openModal="모달창열렸니 = true; 누른거 = $event" :원룸="원룸들[i]" v-for="(작명,i) in 원룸들" :key="작명"/>
  
  <!-- <div v-for="(a,i) in 원룸들" :key="i">
    <img :src="a.image" class="room-img">
    <p>{{a.price}} 만원</p>
  </div> -->

  <!-- <Discount v-bind:이름="오브젝트.name" :나이="오브젝트.age"/> -->

  <!-- <div v-for="(a, i) in products" :key="i">
    <h4>{{a}}</h4>
    <p>{{prices[i]}} 만원</p>
  </div>   -->
  <!-- <div v-for="(a, i) in 3" :key="i">
    <h4>{{products[i]}}</h4>
    <p>{{prices[i]}} 만원</p>
  </div> -->

  <!-- <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h4 @click="모달창열렸니 = true">{{products[0]}}</h4>
    <p>{{prices[0]}} 만원</p>
    <button @click ="신고수[0]++">허위매물신고</button>
    <span>신고수 : {{신고수[0]}}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" class="room-img">
    <h4>{{products[1]}}</h4>
    <p>{{prices[1]}} 만원</p>
    <button @click ="신고수[1]++">허위매물신고</button>
    <span>신고수 : {{신고수[1]}}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img">
    <h4>{{products[2]}}</h4>
    <p>{{prices[2]}} 만원</p>
    <button @click ="신고수[2]++">허위매물신고</button>
    <span>신고수 : {{신고수[2]}}</span>
  </div> -->



</template>

<script>

import data from './data/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';



export default {
  name: 'App',
  data(){
    return{
      showDiscount : true,
      amount : 30,
      원룸들오리지널 : [...data],
      오브젝트 : {name: "kim", age: 20},
      누른거 : 0,
      원룸들 : data,
      모달창열렸니 : false,
      메뉴들 : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      prices : [60, 70, 80],
      신고수 : [0, 0, 0],
    }
  },
  methods : {
    increase(){
      this.신고수[0] += 1,
      this.신고수[1] += 1,
      this.신고수[2] += 1

    },
    sortBack(){
      this.원룸들 = [...this.원룸들오리지널];
    },
    priceSort(){
      this.원룸들.sort(function(a,b){
        return a.price - b.price
      })
    },
    priceDisSort(){
      this.원룸들.sort(function(a,b){
        return b.price - a.price
      })
    },
    titleABC(){
      this.원룸들.sort(function(a,b){
        return a.title.localeCompare(b.title)
      })
    },
    pricefilter(){
      this.원룸들 = this.원룸들.filter(a => a.price <= 500000)
    },
  },

  // created(){
  //   //서버에서 데이터가져오는 코드
  // },

  // Mount 전에 뭔가 실행하고 싶을 때
  beforeMount(){

  },
  // Mount 후에 뭔가 실행하고 싶을 때
  mounted(){
    // 2초 후에 사라지게
    // setTimeout(()=>{
    //   this.showDiscount = false;
    // }, 2000);
    // 1초마다 1%씩 감소하게
    setInterval(() => {
      if (this.amount <= 0) {
        clearInterval(setInterval) 
      } else {
        this.amount--;
      }
    }, 1000);
  },
  
  components: {
    Discount : Discount,
    Modal : Modal,
    Card : Card,
  }
}
</script>

<style>
  /* .start {
    opacity : 0;
    transition : all 1s;
  }
  .end {
    opacity: 1;
  } */


  .fade-leave-from{
    opacity: 0;
  }
  .fade-leave-active{
    transition: all 1s;
  }
  .fade-leave-to{
    opacity: 1;
  }

  .fade-enter-from{
    transform: translateY(-1000px);
  }
  .fade-enter-active{
    transition: all 1s;
  }
  .fade-enter-to{
    transform: translateY(0px);
  }
  
  body {
    margin : 0;
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
    width: 100%; height:100%;
    background: rgba(0,0,0,0.5);
    position: fixed; padding: 20px;
  }
  .white-bg {
    width: 100%; background: white;
    border-radius: 8px;
    padding: 20px;
  } 
  .room-img {
    width: 100%;
    margin-top: 40px;
  }
  #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
  }
  .menu {
    background : darkslateblue;
    padding : 15px;
    border-radius : 5px;
  }
  .menu a {
    color : white;
    padding : 10px;
  }
</style>
