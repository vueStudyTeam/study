<template>
  <div @click="fire" class="filter-item" :class="filter" :style="`background-image:url(${image})`">
    <slot></slot>
  </div> 
</template>

<script>
export default {
  name : 'filterbox',
  methods : {
    fire(){
      this.emitter.emit('click_box', this.filter)
    }
  },
  props: {
    image : String,
    filter : String,
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
  cursor: pointer;
}
</style>