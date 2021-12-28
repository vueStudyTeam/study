<template>
 <div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="?" />
  <div class="post-header" v-for="(items, i) in follower" :key='i'>
    <div class="profile" :style="`background-image:url(${items.image})`"></div>
    <span class="profile-name">{{items.name}}</span>
  </div>
</div>  
</template>

<script>
import {computed, onMounted, ref, toRefs, watch} from 'vue';
import axios from 'axios';
import {useStore} from 'vuex'

export default {
    name:'mapage',
    setup(props){
       let follower = ref([]); 

        let prop = toRefs(props);
        console.log(prop);

        watch(prop, ()=>{
            
        });

        computed(()=>{
            return 'something';
        })

        let store = useStore();
        console.log(store.state.postingData);

        onMounted(()=>{
                axios.get('/follower.json').then((result)=>{
                follower.value = result.data;
            })
        })
       return {follower}
    },
    data() {
        return {
            
        }
    },
}
</script>

