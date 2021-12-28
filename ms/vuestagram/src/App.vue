<template>
  <div class="header">
    <ul class="header-button-left">
      <img src="./assets/cancel.png" v-if="this.step > 0" @click="this.step -= 1" class="cancel"/>
    </ul>
    <ul class="header-button-right">
      <img src="./assets/cancel.png" v-if="this.step == 1" @click="this.step++"  class="next"/>
      <li v-if="this.step == 2" @click="publish()">POST</li>
    </ul>
    <img src="./assets/instagram-logo.png" class="logo" />
  </div>

  <Container @write="uploadContent = $event" :selc_filter="selc_filter" :image="image" :postdata="postdata" :step="step"/>
  
  <div @click="more" v-if="this.step == 0" class="more">MORE</div>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label v-if="this.step == 0" for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from './components/Container.vue';
import postdata from './data/postdata.js';
import axios from 'axios';

export default {
  name: 'App',
  data(){
    return {
      postdata : postdata,
      더보기 : 0,
      step : 0,
      image : '',
      uploadContent : '',
      selc_filter : '',
    }
  },
  components: {
    Container,
  },
  methods : {
    mounted() {
      this.emitter.on("selc_filter", (f) => {
        this.selc_filter = f;
      });
    }, 
    more(){
      // post 요청은 axios.post() 실패시 실행할 코드는 .catch()
      // axios.post('URL', {name : 'kim'}).then().catch((err)=>{err})

      axios.get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
      .then(result => {
        // console.log(result.data);
        this.postdata.push(result.data);
        this.더보기++;
      })
    },
    upload(e){
      let file = e.target.files;
      //1. FileReader() 를 쓰면 이미지를 글자로 변환할 수 있고 (글자니까 어디 저장하고 넣을 수도 있고)
      //2. URL.createObjectURL() 을 쓰면 이미지 URL을 잠깐 만들어줍니다. (다만 새로고침하면 사라짐)
      let url  = URL.createObjectURL(file[0]);
      this.image = url;
      this.step++;
    },
    publish() {
      var myData = {
          name: "minseo",
          userImage: "https://placeimg.com/100/100/arch",
          postImage: this.image,
          likes: 36,
          date: "Dec 23",
          liked: false,
          content: this.uploadContent,
          filter: this.selc_filter
      }
      this.postdata.unshift(myData);
      this.step = 0;
    },
  },
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
    width: 110px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 4px;
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
    float: left;
    padding-left: 20px;
    padding-bottom: 0;
    cursor: pointer;
    margin-top: 6px;
  }
  .header-button-right {
    float: right;
    padding-right: 20px;
    cursor: pointer;
    margin-top: 6px;
  }
  .next{
    width: 25px;
    transform: scaleX(-1);
  }  
  .cancel{
    width: 25px;
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
  .more{
    width: 100%;
    text-align: center;
    background-color: #eee;
    border: 1px solid #eee;
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
