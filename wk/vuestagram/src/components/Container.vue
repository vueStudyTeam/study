<template>
<div v-if="step == 0">
    <div v-for="data in 인스타데이터" :key="data">
        <Post :인스타데이터="data" :sfilter="sfilter" />
    </div>
</div>

<div v-if="step == 1">
    <!-- 필터선택페이지 -->
    <div :class="sfilter" class="upload-image" :style="{backgroundImage : `url(${imageUrl})`}"></div>
    <div class="filters">
        <FilterBox :imageUrl="imageUrl" :filter="filter" v-for="filter in filters" :key="filter">
            <!-- slot 태그에 박힘 -->
            <!-- named slot 사용법  <slot name = "a"></slot> <template v-slot :a> </template> html도 가능!!-->
            <!-- slot props: 자식->부모 <slot :name ="name">내용</slot> <template v-slot : default="name"></template> -->
            {{filter}}
        </FilterBox>
    </div>
</div>

<!-- 글작성페이지 -->
<div v-if="step == 2">
    <div :class="sfilter" class="upload-image" :style="{backgroundImage : `url(${imageUrl})`}"></div>
    <div class="write">
        <textarea class="write-box" @input="$emit('textSend',$event.target.value)">write!</textarea>
    </div>
</div>

<div v-if="step == 3">
    <Mypage :one = "1" />
</div>

</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import Mypage from "./MyPage.vue";

export default {
    props: {
        인스타데이터: Array,
        step: Number,
        imageUrl: String,
        sfilter : String,
    },
    data() {
        return {
            filters: ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
                "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
                "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"
            ],
        }
    },
    components: {
        Post,
        FilterBox,
        Mypage,
    },
}
</script>

<style>
.upload-image {
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size: cover;
}

.filters {
    overflow-x: scroll;
    white-space: nowrap;
}

.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
}

.filters::-webkit-scrollbar {
    height: 5px;
}

.filters::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>
