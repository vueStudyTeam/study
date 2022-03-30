<template>
  <div>
      <p>sample Component</p>
      <a v-on:click='changeVuexState'>test event</a>
  </div>
</template>

<script>
import {useStore} from 'vuex';

export default {
    mounted() {
        let store  = useStore();
        console.log('from component use store 1 : ',store);
    },
    methods: {
        changeVuexState(){
            //method에서는 useStore undefined 뜸. 
            this.$store.commit('sampleMutation');
            console.log('from component use store 2 : ',this.$store);
        }
    },
    data(){
        return {

        }
    }
}
</script>