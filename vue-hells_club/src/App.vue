<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
//import axios from 'axios';

export default {
  name: 'App',
  
  mounted() {
    // axios.get('https://test.com').then((data)=>{
    //     console.log(data);
    // })
    console.log('store : ',this);
    console.log('store : ',this.$store);
    console.log('store : ',this.$store.state);
  },
}
</script>

<style>

</style>
