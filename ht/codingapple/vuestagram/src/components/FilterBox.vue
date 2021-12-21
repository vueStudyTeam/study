<template>
    <div :class="`${filter} filter-item`" :style="`background-image:url(${this.image})`">
        <slot></slot>
        <button v-on:click='fire'>button</button>
    </div> 
</template>

<script>
export default {
    name : 'filterbox',
    props : {
        image : String,
        filter : String
    },
    methods: {
        fire(){
            this.emitter.emit('eventEmit','testData');
        }
    },
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block; 
  color : white;
  background-size: cover;
  background-position : center;
}
</style>