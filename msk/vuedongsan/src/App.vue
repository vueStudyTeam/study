<template>
  <div class="app">
    <transition name="modal-action">
      <Modal 
        :modalProduct="modalProduct" 
        :isModalOpen="isModalOpen"
        @toggleModalStatus="toggleModalStatus"/>
    </transition>
    
    <div class="menu">
      <a v-for="title in menu" :key="title">{{title}}</a>
    </div>

    <Discount/>

    <button @click="priceSort">가격순정렬</button>
    <button @click="sortBack">되돌리기</button>

    <Card v-for="(product, index) in products" :key="product"
      :product="product"
      :index="index"
      @toggleModalStatus="toggleModalStatus"/> 
  </div>

</template>

<script>
import products from "./data/oneroom";
import Discount from "./components/Discount.vue";
import Modal from "./components/Modal.vue";
import Card from "./components/Card.vue";

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
    toggleModalStatus(index) {
      var modalStatus = this.isModalOpen;
      this.isModalOpen = !modalStatus;
      if (index >= 0) {
        this.modalProduct = this.products[index];
      } else {
        this.modalProduct = {};
      }
    },
    priceSort() {
      this.products.sort(function(a, b) {
        return a.price - b.price;
      });
    },
    sortBack() {
      this.products = products.map(product => ({...product, reportCount: 0}));
    }
  },
  components: {
    Discount,
    Modal,
    Card
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

  .modal-action-enter-from {
    opacity: 0;
  }

  .modal-action-enter-active {
    transition: all 1s;
  }

  .modal-action-enter-to {
    opacity: 1;
  }

  .modal-action-leave-from {
    transform: translateY(0px);
  }

  .modal-action-leave-active {
    transition: all 1s;
  }

  .modal-action-leave-to {
    transform: translateY(-1000px);
  }
</style>
