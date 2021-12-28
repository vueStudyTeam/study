<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if='step == 1' v-on:click='step++'>Next</li>
      <li v-if='step == 2' v-on:click='publish'>Write</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  <button @click="$store.commit('changeName')">뷰액스로 바꾸기</button>
   <h4>{{$store.state.testData}}</h4> 
  <Container @write="content = $event" :step='step' :postingData='postingData' :image = 'image' :filter='filter'/>
  <button @click="$store.dispatch('getMoreData')">더 보기</button>

<!--FileReader() , URL.createObjectURL() 알아보기. -->
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
</template>
<script>
import Container from './components/Container.vue'
//import PostingData from './data/PostingData'
import axios from 'axios'
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      step : 3,
      postingData : [],
      postIndex : 0,
      image : '',
      content : '',
      filter : '',
    }
  },
  mounted(){
    this.emitter.on('selectFilter', (data)=>{
      this.filter = data;
    });
    this.postingData = this.$store.state.postingData;
  },
  //처음 랜더링 될 때의 데이터 값을 간직함.
  computed : {
    ...mapState(['postingData'])
  },
  methods: {
    //vuex 안의 메서드를 불러와 등록 가능
    ...mapMutations(['setMore']),
    publish(){
      var item = {
      name: "Kim Hyun",
      userImage: "https://placeimg.com/100/100/arch",
      postImage: this.image,
      likes: 36,
      date: "May 15",
      liked: false,
      content: this.content,
      filter: "perpetua"
    };
      this.postingData.unshift(item);
      this.step = 0;
    },
    more(){ 
      var _this = this;
      axios.get('https://codingapple1.github.io/vue/more'+_this.postIndex+'.json')
      .then(function(result){
        console.log(result);
        _this.postingData.push(result.data);
        ++_this.postIndex;
      }).catch(function(){
        alert('게시물이 없습니다.');
      })
    },
    upload(e){
      //createObjectURL

      let file = e.target.files;
      console.log('file :: ',file);
      let url = URL.createObjectURL(file[0]);
      console.log(url);
      this.image = url;
      this.step++;
    }
  },
  components: {
      Container : Container
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
