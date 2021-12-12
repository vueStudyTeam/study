<template>
 <div v-for="post in 블로그글" :key="post">
    <h5>{{post.title}}</h5>
    <p>{{post.date}}</p>
  </div>

  
</template>

<script>
export default {
props :{
    블로그글 : Array
}
}
</script>

<style>

</style>