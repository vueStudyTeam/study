<template>
    <div class="black-bg" v-if="isModalOpen && modalProduct">
        <div class="white-bg">
            <h4>{{ modalProduct.title }} <span class="report-count">(신고수 : {{modalProduct.reportCount}})</span></h4>
            <img class="modal-img" :src="modalProduct.image">
            <p>{{ modalProduct.content }}</p>
            <p>{{modalProduct.price}} 원</p>
            <input v-model="month"> 
            <p> {{month}} 개월 선택함 : {{modalProduct.price * month}} 원</p>
            <button class="modal-button" @click="report()">허위 매물 신고</button><button class="modal-button" @click="toggleModalStatus">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    data() {
        return {
            month: 0
        }
    },
    watch : {
        month(inputData) {
            if (isNaN(inputData) || !inputData) {
                this.month = 0;
            }
        }
    },
    updated() {
        if (this.month == 2) {
            alert("2개월은 너무 적음.. 안 팝니다");
            this.month = 3;
        }
    },
    props: {
        modalProduct : Object,
        isModalOpen : Boolean
    },
    methods: {
        report() {
            var modalProduct = this.modalProduct;
            modalProduct.reportCount++;
        },
        toggleModalStatus() {
            this.$emit("toggleModalStatus");
        }
    }
}
</script>

<style>
    .black-bg {
        width: 100%; 
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: fixed;
        padding: 20px;
    }

    .white-bg {
        width: 90%; 
        background: white;
        border-radius: 8px;
        padding: 20px;
    }

    .modal-img {
        width: 200px;
    }

    .report-count {
        font-weight: normal;
    }

    .modal-button {
        margin: 10px;
        background: darkslateblue;
        color: white;
        border: 1px solid lightgray;
        border-radius: 8px;
    }
</style>