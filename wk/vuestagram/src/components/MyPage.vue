<template>
<div style="padding : 10px">
    <h4>팔로워</h4>
    <input v-model="word" />
    <div class="post-header" v-for="follo in follower" :key="follo">
        <div class="profile" :style="{backgroundImage : `url(${follo.image})`}"></div>
        <span class="profile-name">{{follo.name}}</span>
    </div>
</div>
</template>

<script>
import {
    // computed,
    // reactive,
    ref,
    // toRefs
} from '@vue/reactivity'
import axios from 'axios'
import {
    onBeforeUpdate,
    onMounted
    // , watch
} from '@vue/runtime-core';
// import {
//     useStore
// } from 'vuex';
export default {
    name: 'mypage',
    // props: {
    //     one: Number,
    // },
    setup() {
        let follower = ref([]);
        let oFollower = ref([]);
        let word = ref("");
        

        // let test = reactive({
        //     name: 'kim'
        // });
        // let {
        //     one
        // } = toRefs(props);

        // console.log(one.value)

        // watch(one, ()=>{

        // })

        // let 결과 = computed(() => {
        //     return follower.value.length });
        // console.log(결과.value);

        // let store = useStore();
        // console.log(store.state.name);
        // console.log(store.commit());

        onMounted(() => {
            axios.get('/follower.json')
                .then(res => {
                    follower.value = res.data;
                    oFollower.value = res.data;
                })
                .catch(err => {
                    console.error(err);
                });

        });

        onBeforeUpdate(() => {


            //마지막 숙제
            follower.value = oFollower.value;

            let result = follower.value.filter((a)=>{
                return a.name.search(word.value) >= 0  
            });

            follower.value = result;

        })

        return {
            follower,
            word
        }
    }
}
</script>

<style scoped>

</style>
