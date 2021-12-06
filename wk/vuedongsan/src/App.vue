<template>
<!-- <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
        <h4>{{원룸들[누른거].title}}</h4>
        <img :src="원룸들[누른거].image" class="room-img" />
        <p>{{원룸들[누른거].content}}</p>
        <p>{{원룸들[누른거].price}}</p>
        <Discount></Discount>
        <button @click="모달창열렸니 = false">Close</button>
    </div>
</div> -->

<Modal :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니"/>

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

<!-- 1.컴포넌트 vue 파일생성    
     2. import 
     3. components 에 등록 
     4. 컴포넌트 등록 명으로 태그 등록 -->
<Discount/>
<!-- <Discount v-bind="오브젝트" :이름 ="오브젝트.name" :나이 ="오브젝트.age"/> -->

<!-- 반복 시 이득, but 많이 쓰지않는거 추천 -->
<!-- <div v-for="(room,i) in 원룸들" :key="room">
    <img :src="room.image" class="room-img" />
    <h4 @click="모달창열렸니 = true; 누른거 = i;">{{ room.title }}</h4>
    <p>{{room.price}}원</p>
</div> -->

<Card :원룸="room" v-for="room in 원룸들" :key="room"/>
<!-- <Card :원룸="원룸들[i]" v-for="(room,i) in 원룸들" :key="room"/> -->

</template>

<script>
// import oneroom from './assets/oneroom.js'; 
// import { apple, apple2} from './assets/oneroom.js';

import data from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';

export default {
    name: 'App',
    data() {
        return {
            오브젝트 :{name : 'kim', age : 20},
            누른거: 0,
            원룸들: data,
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
    components: {
        Discount: Discount,
        Modal : Modal,
        Card : Card
    }
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
