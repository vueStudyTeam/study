<template>
<div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
        <h4>{{원룸들[누른거].title}}</h4>
        <img :src="원룸들[누른거].image" class="room-img" />
        <p>{{원룸들[누른거].content}}</p>
        <!-- <input @input="month = $event.target.value"> -->
        <!-- v-model은 데이터에 바로 넣어준다 - > input은 문자로인식 주의!! v-model.number로 사용 -->
        <!-- form validation 라이브러리 설치하면 watcher안써도됨 -->
        <input v-model="month">
        <!-- <input type="range" min="1" max= "12"> -->
        <p>{{month}}개월 선택함 : {{원룸들[누른거].price * month}} 원</p>
        <button @click="sendClose">닫기</button>
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
            month: 1
        }
    },
    watch: {
        //month(a,b) 변경 후 a , 변경 전 b
        month(a) {
            //사용자가 month를 글자로 입력하면 경고문 띄워주시오.
            if (isNaN(a)) {
                alert("글자입력금지!");
                this.month = 1;
            } else if (a > 12) {
                alert("13보다 작은수를 입력하세요!");
                this.month = 1;
            }
        }

    },
    methods: {
        sendClose() {
            this.$emit('closeModal');
        }
    },
    beforeUpdate() {
        if(this.month == 2){
            alert("2야모야");
        }
    }

}
</script>

<style>

</style>
