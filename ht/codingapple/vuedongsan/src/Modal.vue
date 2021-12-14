<template>
<div class="black-bg" v-if="modalYn == true">
  <div class="white-bg">
    <h4>{{products[modalDataIdx].title}}</h4>
    <p>상세페이지내용임</p>
    <input v-model="month"/>
    <p> {{month}} 개월 선택함 : {{products[modalDataIdx].price * month}} 원 </p>
    <button v-on:click="closeModal">닫기</button>
  </div>
</div>
 
</template>

<script>
export default {
    name:'Modal',
    methods: {
      closeModal:function (){
        this.month = 1;
        this.$emit('closeModal');
      }
    },
    data() {
      return {
          month:1,
      }
    },
    watch :{
      month(month){
      console.log('test : ',month,parseInt(month),Number(month),isNaN(parseInt(month)));
        //한글일 경우 스페이스등 한 음절을 넘어가야 watch가 인식됨. 
        //회원가입 같은 한글이 들어가는 경우는 watch보다는 인풋 키업등의 기능을 이용하는게 더 좋을듯
        var exp = /[^0-9]/g;
        console.log('정규식 :: ',exp.test(Number(month)));

        if(isNaN(Number(month))){
          alert('숫자만 입력해주세요');
          this.month = 1;
        }
        if(month > 12){
          alert('너무 큽니다.');
          this.month = 1;
        }
      }
    },
    props:{
        products : Array,
        modalYn : Boolean,
        modalDataIdx : Number
    },
}
</script>
