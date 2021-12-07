<template>
    <div>
        <img class="room-img" :src="product.image">
        <h4 @click="toggleModalStatus(index)">{{product.id + 1}}. {{product.title}}</h4>
        <p>{{product.price}} 원</p>
        <p>신고수 : {{product.reportCount}}</p>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        product: Object,
        index: Number
    },
    methods: {
        toggleModalStatus(index) {
            this.$emit('toggleModalStatus', index);
        }
    }
}
</script>

<style>

</style>