<template>
<div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
        <h4>상세페이지임</h4>
        <p>상세페이지 내용임</p>
        <button @click="모달창열렸니 = false">Close</button>
    </div>
</div>
<div class="menu">
    <a v-for="menu in 메뉴들" :key="menu">{{ menu }}</a>
</div>
<!-- <div v-for="(product, i) in products" :key="product">
    <h4>{{products[i]}}</h4> <p>{{ price[i]}}</p> </div> -->

<!-- <div>
    <img src="./assets/room0.jpg" class="room-img" />
    <h4>{{ products[0] }}</h4>
    <p>60만원</p>
    <button @click="increase(0)">허위매물신고</button>
    <span>신고수 : {{ 신고수[0] }}</span>
</div>
<div>
    <img src="./assets/room1.jpg" class="room-img" />
    <h4>{{ products[1] }}</h4>
    <p>80만원</p>
    <button @click="increase(1)">허위매물신고</button>
    <span>신고수 : {{ 신고수[1] }}</span>
</div>
<div>
    <img src="./assets/room2.jpg" class="room-img" />
    <h4>{{ products[2] }}</h4>
    <p>70만원</p>

    <button @click="increase(2)">허위매물신고</button>
    <span>신고수 : {{ 신고수[2] }}</span>
</div> -->

<div v-for="room in 원룸들" :key="room">
    <img :src="room.image" class="room-img" />
    <h4>{{ room.title }}</h4>
    <p>{{room.price}}원</p>
</div>
</template>

<script>
// import oneroom from './assets/oneroom.js'; import { apple, apple2} from
// './assets/oneroom.js';

import data from './assets/oneroom.js';

export default {
    name: 'App',
    data() {
        return {
            원룸들 : data,
            모달창열렸니: false,
            신고수: [0, 0, 0],
            메뉴들: ['Home', 'Shop', 'About'],
            price: [60, 80, 40],
            products: ['역삼동원룸', '천호동원룸', '마포구원룸']
        }
    },
    methods: {
        increase(num) {
            this.신고수[num] += 1;
        }
    },
    components: {}
}
</script>

<style>
body {
    margin: 0;
}

div {
    box-sizing: border-box;
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
