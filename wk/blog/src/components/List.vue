<template>
 <div v-for="post in 블로그글" :key="post">
    <h5 @click = "$router.push('/detail/'+post.number)">{{post.title}}</h5>
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