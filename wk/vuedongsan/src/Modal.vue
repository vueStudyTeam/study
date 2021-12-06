<template>
<div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
        <h4>{{원룸들[누른거].title}}</h4>
        <img :src="원룸들[누른거].image" class="room-img" />
        <p>{{원룸들[누른거].content}}</p>
        <p>{{원룸들[누른거].price}}</p>
        <Discount></Discount>
        <!-- props 재할당 금지 -->
        <!-- <button @click="모달창열렸니 = false">Close</button> -->
    </div>
</div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        원룸들: Array,
        누른거: Number,
        모달창열렸니: Boolean
    },
    data() {
        return {
            // 상위 컴포넌트에서 데이터쓸 경우 최상위 컴포넌트에 선언하는게 좋음
        }
    },

}
</script>

<style>

</style>
