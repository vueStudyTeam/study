<template>
    <div v-on:click='selectFilter' :class="`${filter} filter-item`" :style="`background-image:url(${this.image})`">
        <slot></slot>
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
        selectFilter(){
            this.emitter.emit('selectFilter',this.filter);
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