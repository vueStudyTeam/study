<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/home"><a class="nav-link active" aria-current="page" href="#">Home</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/list"><a class="nav-link" href="#">List</a></router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="mt-4">
<router-view :블로그글 ="블로그글"></router-view>
<!-- <List :블로그글 ="블로그글"/> -->
</div>
</template>

<script>
// import List from './components/List.vue';
import blog from './assets/blog.js';

export default {
  name: 'App',
  data() {
    return {
      블로그글 : blog
    }
  },
  components: {
    // List: List
    
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
  margin-top: 60px;
}
</style>
