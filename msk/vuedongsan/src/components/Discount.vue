<template>
    <div class="discount">
        <h4>지금 결제하면 {{discountRate}}% 할인</h4>
    </div>
</template>

<script>
    export default {
        name: 'Discount',
        data() {
            return {
                discountRate: 30
            }
        },
        mounted() {
            var timer = setInterval(() => {
                this.discountRate--;

                if (this.discountRate == 0) {
                    clearInterval(timer);
                }
            }, 1000);
        }
    }
</script>

<style scoped>
    .discount {
        background: #eee;
        padding: 10px;
        margin: 10px;
        border-radius: 5px;
    }
</style>