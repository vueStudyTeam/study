<template>
  <div v-for="(blogList,i) in 블로그글" :key="blogList">
    <h5 @click="$router.push('/detail/' + i)">{{ 블로그글[i].title }}</h5>
    <p>{{ 블로그글[i].date }}</p>
  </div>
</template>

<script>
export default {
  name: "list",
  props : {
    블로그글 : Array,
  }
}
</script>

<style>

</style>