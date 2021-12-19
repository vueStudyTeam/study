<template>
  <div>
    <router-link to="/list"><p>to List</p></router-link>
    <router-link to="/"><p>to Main</p></router-link>
    <router-view :listItems="blogItems"></router-view>
  </div>
</template>

<script>
import blogItems from "./data/blogItems";

export default {
  name: 'App',
  data() {
    return {
      blogItems : blogItems
    }
  },
  components: {
  }
}
</script>

<style>
</style>
