<template>
<div class="header">
    <ul class="header-button-left">
        <li @click="cancel">Cancel</li>
    </ul>
    <ul class="header-button-right">
        <li v-if="step == 1" @click="next">Next</li>
        <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
</div>

<Container @textSend="resText = $event" :인스타데이터="인스타데이터" :step="step" :imageUrl="imageUrl" :sfilter="sfilter" />
<button @click="more">더보기</button>
<div class="footer">
    <ul class="footer-button-plus">
        <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
    </ul>
</div>

<h4>안녕 {{$store.state.name}}</h4>
<h4>니나이 {{$store.state.age}}</h4>
<!-- vuex 국룰 컴포넌트 안에서 직접 수정하기 금지 -->
<!-- <button @click ="$store.state.name = 'park'"> 버튼</button> -->
<!-- store.js 에 데이터 수정 요청하기 -->
<button @click="$store.commit('이름변경')"> 이름변경버튼</button>
<button @click="plusAge(2)"> 나이증가버튼</button>

<p>{{ $store.state.more }}</p>
<button @click="$store.dispatch('getData')"> 더보기요청버튼</button>
<p>{{now2 }} {{카운터 }}</p>

<p>{{name}}</p>
<p>{{age}}</p>
<p>{{likes}}</p>
<button @click ="카운터++"> 렌더링요청버튼</button>
<p>{{내이름}}</p>
<!-- <div v-if="seen == 0">내용0</div>
<div v-if="seen == 1">내용1</div>
<div v-if="seen == 2">내용2</div>
<button @click="seenChange(0)">버튼0</button>
<button @click="seenChange(1)">버튼1</button>
<button @click="seenChange(2)">버튼2</button> -->
</template>

<script>
import InstaData from './assets/instaData.js'
import Container from './components/Container.vue'
import axios from 'axios'
import {mapMutations, mapState} from 'vuex'

export default {
    name: 'App',
    data() {
        return {
            인스타데이터: InstaData,
            cnt: 0,
            step: 0,
            imageUrl: "",
            resText: "",
            sfilter: "",
            카운터: 0,
            //seen: 0,
        }
    },
    mounted() {
        this.emitter.on('sendFilter', (a) => {
            // console.log(a);
            this.sfilter = a;

        });
    },
    //첫 로드시 한번만 호출됨. 결과 저장용 함수. state 내용을 짧게 쓸수있다. ->setter,getter 느낌
    computed: {
        name(){
            return this.$store.state.name;
        },
        //한방에
        ...mapState(['name', 'age', 'likes']),
        //이름짓고싶을때
        ...mapState({내이름: "name"}),

    },
    methods: {
        //뮤테이션 함수 쉽게
        ...mapMutations(['setMore','plusAge']),
        now() {
            return new Date();
        },
        more() {
            axios.get(`https://codingapple1.github.io/vue/more${this.cnt}.json`)
                .then(res => {
                    console.log(res.data);
                    this.인스타데이터.push(res.data);
                    this.cnt++;
                }).catch(err => {
                    console.error(err);
                });

        },
        upload(e) {
            let 파일 = e.target.files;
            // fileReader(), URL.createObjectURL() 
            //파일[0].type -> 파일체크가능
            this.imageUrl = URL.createObjectURL(파일[0]);
            this.step = 1;

        },
        next() {
            this.step++;
        },
        cancel() {
            this.step = 0;
        },
        publish() {
            var myPost = {
                name: "brucee",
                userImage: "https://placeimg.com/100/100/arch",
                postImage: this.imageUrl,
                likes: 0,
                date: "dec 20",
                liked: false,
                content: this.resText,
                filter: this.sfilter
            }
            this.인스타데이터.unshift(myPost);
            this.cancel();
        },
        // seenChange(btnNum){
        //   this.seen = btnNum;
        // }
    },
    components: {
        Container,

    }
}
</script>

<style>
body {
    margin: 0;
}

ul {
    padding: 5px;
    list-style-type: none;
}

.logo {
    width: 22px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
}

.header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;
    top: 0;
}

.header-button-left {
    color: skyblue;
    float: left;
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 10px;
}

.header-button-right {
    color: skyblue;
    float: right;
    width: 50px;
    cursor: pointer;
    margin-top: 10px;
}

.footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
}

.footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
}

.sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
}

.inputfile {
    display: none;
}

.input-plus {
    cursor: pointer;
}

#app {
    box-sizing: border-box;
    font-family: "consolas";
    margin-top: 60px;
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}
</style>
