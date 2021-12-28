<template>
<div>
<Modal :products="products" :modalYn="modalYn" :modalDataIdx="modalDataIdx" v-on:closeModal="closeModal"/>
<div class="menu">
  <a v-for="(items,i) in menus" :key="i">{{items}}</a>
</div>
<Discount v-if="showDiscount == true"/>

<button v-on:click="priceSort()">가격순정렬</button>
<button v-on:click="stringSort()">가나다순정렬</button>
<button v-on:click="sortBack()">되돌리기</button>
<Card :item="items" v-for="(items, i) in products" :key="i" v-on:clickModalBtn="clickModalBtn(i)"/>
</div>
</template>

<script>
import products from "./assets/data.js"
import Discount from "./Discount.vue"
import Modal from "./Modal.vue"
import Card from "./Card.vue"

export default {
  name: 'App',
  components : {
    Discount : Discount,
    Modal :Modal,
    Card : Card
  },
  data(){
    return {
      productsOrigin : [...products],
      modalDataIdx : 0,
      modalYn:false,
      showDiscount:true,
      reports : [0,0,0],
      menus : ['Home', 'Shop', 'About'],
      products : products

    }
  },

  mounted() {
    let _this = this
    setTimeout(function(){
      //function 에서의 this는 함수를 호출 할 때 어떻게 호출 되었는지에 따라 바인딩할 객체가 동적으로 결정.
      //메서드 내부함수일 경우에도 this는 전역에 바인딩됨. 
      //setTimeout은 전역(window)에 등록되어있는 함수
      //콜백, 함수 내부의 함수는 무조건 window객체를 바라봄 (설계오류..)
      //화살표 함수는 자체적으론 this가 없다 .. 가장 가까운 객체의 this를 바라봄
      _this.showDiscount = false;
    },2000)
  },  

  methods: {
    closeModal(){
      this.modalYn = false
    },
    increase(index){
      this.reports[index] += 1;
    },
    clickModalBtn(index){
      this.modalYn = true;
      this.modalDataIdx = index;
    },
    priceSort(){
      this.products.sort(function(a,b){
        return a.price - b.price
      })
    },
    stringSort(){
      this.products.sort(function(a,b){
        return a.title < b.title ? -1 : 1
      })
    },
    sortBack(){
      this.products = [...this.productsOrigin];
    }
  },
}
</script>

<style>
 body {
    margin: 0;
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
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
}
.white-bg {
    width: 100%;
    background: white;
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
