<template>
<div>
    <img :src="item.image">
    <h4>{{item.title}}</h4>
    <p>{{item.price}}</p>
    
<button @click="clickModalBtn()">자세히</button>
</div>
</template>

<script>
export default {
    name: 'Card',
    props:{
        item:Object
    },
  
    methods: {
        clickModalBtn(){
            this.$emit('clickModalBtn');
        }
    },
}
</script> 