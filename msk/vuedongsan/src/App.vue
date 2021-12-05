<template>
  <div class="app">
    <Modal/>
    
    <div class="menu">
      <a v-for="title in menu" :key="title">{{title}}</a>
    </div>

    <Discount/>

    <div v-for="(product, index) in products" :key="product">
        <img class="room-img" :src="product.image">
        <h4 @click="toggleModalStatus(index)">{{product.id + 1}}. {{product.title}}</h4>
        <p>{{product.price}} 원</p>
        <p>신고수 : {{product.reportCount}}</p>
    </div>
  </div>

</template>

<script>
import products from "./data/oneroom";
import Discount from "./components/Discount.vue";

export default {
  name: 'App',
  data() {
    return {
      isModalOpen: false,
      modalProduct: {},
      menu : ['Home', 'Shop', 'About'],
      products : products.map(product => ({...product, reportCount: 0}))
    }
  },
  methods: {
    report(index) {
      var product = this.products[index];
      product.reportCount++;
    },
    toggleModalStatus(index) {
      var modalStatus = this.isModalOpen;
      this.isModalOpen = !modalStatus;
      if (index >= 0) {
        this.modalProduct = this.products[index];
      } else {
        this.modalProduct = {};
      }
    }
  },
  components: {
    Discount
}
}
</script>

<style>
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

  .room-img {
    width: 100%;
    margin-top: 40px;
  }
</style>
