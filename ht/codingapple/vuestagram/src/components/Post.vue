<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{backgroundImage: `url(${this.post.userImage})`}"></div>
      <span class="profile-name">{{this.post.name}}</span>
    </div>
    <div v-on:click='changeLike' class="post-body" :style="{backgroundImage : `url(${this.post.postImage})`}"></div>
    <div class="post-content">
      <p>{{this.post.likes}} Likes</p>
      <p><strong>{{this.post.name}}</strong> {{this.post.content}}</p>
      <p class="date">{{this.post.date}}</p>
    </div>
</div> 
</template>

<script>
export default {
    props : {
        post:Object,
        index:Number
    },
    methods: {
      changeLike(){
        console.log('click',this.$store);
        this.$store.commit('changeLikes',this.index);
      }
    },
}
</script>

<style>
.post {
  width: 100%;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>