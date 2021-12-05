<template>
    <div class="black-bg" v-if="isModalOpen && modalProduct">
        <div class="white-bg">
            <h4>{{ modalProduct.title }} <span class="report-count">(신고수 : {{modalProduct.reportCount}})</span></h4>
            <p>{{modalProduct.price}} 원</p>
            <img class="modal-img" :src="modalProduct.image">
            <p>{{ modalProduct.content }}</p>
            <button class="modal-button" @click="report(modalProduct.id)">허위 매물 신고</button><button class="modal-button" @click="toggleModalStatus">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    data() {
        return {
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