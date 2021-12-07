<template>
<div v-if="1==2">
  안녕하세요.
</div>
<div v-else-if="1==3">안녕하세요 2</div>
<div v-else>안녕하세요3</div> 


<div class="menu">
  <a v-for="(items,i) in menus" :key="i">{{items}}</a>
</div>

 <div v-for="(items,i) in products" :key="i">
  <img :src="products[i].image">
  <h4>{{products[i].title}}</h4>
  <p>{{products[i].price}}</p>
  <button @click="clickModalBtn(i)">자세히</button>
</div>

<Discount/>
<Modal :products="products" :modalYn="modalYn" :modalDataIdx="modalDataIdx"/>
</template>

<script>
import products from "./assets/data.js"
import Discount from "./Discount.vue"
import Modal from "./Modal.vue"
export default {
  name: 'App',
  components : {
    Discount : Discount,
    Modal :Modal
  },
  data(){
    return {
      modalDataIdx : 0,
      modalYn:false,
      reports : [0,0,0],
      menus : ['Home', 'Shop', 'About'],
      products : products

    }
  },
  methods: {
    increase(index){
      this.reports[index] += 1;
    },
    clickModalBtn(index){
      console.log('test',this.modalYn);
       this.modalYn = true;
      this.modalDataIdx = index;
     
      console.log('test2',this.modalYn)
      
    }
  },
}
</script>

<style>
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
