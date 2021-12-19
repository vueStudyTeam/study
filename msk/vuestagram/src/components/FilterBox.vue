<template>
    <div @click="filterSelect"  class="filter-item" :class="filter" :style="`background-image: url(${uploadImageUrl})`">
        <slot></slot>
    </div> 
</template>

<script>
export default {
    name: "FilterBox",
    props: {
        uploadImageUrl : String,
        filter: String
    },
    methods : {
        filterSelect() {
            this.emitter.emit("filterSelect", this.filter);
        }
    }
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