<template>
  <SampleComponent />
</template>

<script>
import SampleComponent from './components/SampleComponent.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    SampleComponent : SampleComponent
  },
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
