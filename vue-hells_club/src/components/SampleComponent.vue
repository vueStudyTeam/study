<template>
  <div>
      <p>sample Component</p>
      <a v-on:click='changeVuexState'>test event</a>
  </div>
</template>

<script>
import {useStore} from 'vuex';

export default {
    setup() {
        let store  = useStore();
        console.log('from component use store 1 : ',store);
        console.log('from component use store 2: ',this);
    },
    mounted() {
        let store  = useStore();
        console.log('from component use store 3 : ',store);
        console.log('from component use store 4 : ',this.$axios);

        //전역 객체 (main.js 에 정의)에 등록된 axios 호출
        // this.$axios.get('https://test1.com').then((data)=>{
        //     console.log(data);
        // })
    },
    methods: {
        changeVuexState(){
            //method에서는 useStore undefined 뜸. setup/mounted, method에서 store접근 방법이 다름.
            this.$store.commit('sampleMutation');
            console.log('from component use store 5 : ',this.$axios);
        }
    },
    data(){
        return {

        }
    }
}
</script>