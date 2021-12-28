<template>
<div  @click="fire(filter)" :class="`${filter} filter-item`" :style="{backgroundImage : `url(${imageUrl})`}">
    <slot></slot>
    <!-- <button @click="fire">버튼</button> -->
</div>
</template>

<script>
export default {
    name: 'FilterBox',
    props: {
        imageUrl: String,
        filter: String,
    },
    methods: {
        fire(filter) {
            this.emitter.emit('sendFilter', filter);

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
    color: white;
    background-size: cover;
    background-position: center;
}
</style>
