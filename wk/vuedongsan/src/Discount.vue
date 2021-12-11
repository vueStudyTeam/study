<template>
<div class="discount">
    <h4>지금 결제하면 {{percent-dis}}% 할인</h4>
</div>
</template>

<script>
export default {
    name: 'Discount',
    props: {
      dis : Number
    },
    data() {
        return {
            percent: 30
        }
    },
}
</script>

<style>

</style>
