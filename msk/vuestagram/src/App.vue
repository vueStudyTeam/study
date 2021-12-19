<template>
  <div>
    <div class="header">
        <ul class="header-button-left">
          <li v-if="this.step > 0" @click="this.step = 0">Cancel</li>
        </ul>
        <ul class="header-button-right">
          <li v-if="this.step == 1" @click="this.step++">Next</li>
          <li v-if="this.step == 2" @click="post">Post</li>
        </ul>
        <img src="./assets/logo.png" class="logo" />
    </div>

    <Container 
      :postData="postData"
      :step="step" 
      :uploadImageUrl="uploadImageUrl"
      :uploadFilter="uploadFilter"
      @edit="this.uploadContent = $event"/>
    <button v-if="moreIndex < 1 && step == 0" @click="viewMore">View More</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="uploadImage" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import Container from "./components/Container";
import postData from "./assets/postData";
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      postData,
      moreIndex: 0,
      step: 0,
      uploadImageUrl : '',
      uploadContent: '',
      uploadFilter: ''
    }
  },
  components: {
    Container
  },
  mounted() {
    this.emitter.on("filterSelect", (filter) => {
      this.uploadFilter = filter;
    });
  }, 
  methods: {
    viewMore() {
      var viewMoreUrl = `https://codingapple1.github.io/vue/more${this.moreIndex}.json`;
      axios.get(viewMoreUrl).then((result) => {
          var morePost = result.data;
          this.postData = [...this.postData, morePost];
        });
      
      this.moreIndex++;
    },
    uploadImage(e) {
      var file = e.target.files[0];
      if (file.type.indexOf("image/") > -1) {
        this.uploadImageUrl = URL.createObjectURL(file);
        this.step = 1;
      } else {
        alert("Upload Image Only");
      }
      // 값을 초기화해주지 않으면 같은 값을 2번 올릴 수 없다.
      e.target.value = null;
    },
    post() {
      var myPost = {
        name : "Kim Hyun",
        userImage : "https://placeimg.com/100/100/arch",
        postImage : this.uploadImageUrl,
        likes: 0,
        date : "May 15",
        liked : false,
        content : this.uploadContent,
        filter : this.uploadFilter
      };
      this.postData.unshift(myPost);
      this.step = 0;
      this.uploadImageUrl = "";
      this.uploadContent = "";
    }
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
