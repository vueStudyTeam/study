<template>
  <div class="app">

    <div class="black-bg" v-if="isModalOpen">
      <div class="white-bg">
        <h4>상세 페이지</h4>
        <p>상세 페이지 내용</p>
        <button @click="toggleModalStatus">닫기</button>
      </div>
    </div>

    <div class="menu">
      <a v-for="title in menu" :key="title">{{title}}</a>
    </div>

    <div v-for="(product, index) in products" :key="product">
        <img class="room-img" :src="require('./assets/room' + index + '.jpg')">
        <h4 @click="toggleModalStatus">{{index + 1}}. {{product.name}}</h4>
        <p>{{product.price}} 만원</p>
        <button @click="report(index)">허위 매물 신고</button> <span>신고수 : {{product.reportCount}}</span>
    </div>
  </div>

</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isModalOpen: false,
      menu : ['Home', 'Shop', 'About'],
      products : [
        {
          name : "역삼동원룸",
          price : 50,
          reportCount: 0
        },
        {
          name : "천호동원룸",
          price : 60,
          reportCount: 0
        },
        {
          name : "마포구원룸",
          price : 70,
          reportCount: 0
        }
      ]
    }
  },
  methods: {
    report(index) {
      var product = this.products[index];
      product.reportCount++;
    },
    toggleModalStatus() {
      var modalStatus = this.isModalOpen;
      this.isModalOpen = !modalStatus;
    }
  },
  components: {
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

  .black-bg {
    width: 100%; 
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    padding: 20px;
  }

  .white-bg {
    width: 90%; 
    background: white;
    border-radius: 8px;
    padding: 20px;
  }
</style>
