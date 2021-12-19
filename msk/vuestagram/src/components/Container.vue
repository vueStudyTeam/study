<template>
    <div>
        <!-- POST 페이지 -->
        <div v-if="step == 0">
            <Post v-for="post in postData" :key=post :post="post"/>
        </div>

        <!-- 필터 선택 페이지 -->
        <div v-if="step == 1">
            <div class="upload-image" :class="uploadFilter" :style="{backgroundImage : `url(${uploadImageUrl})`}"></div>
            <div class="filters">
                <FilterBox v-for="filter in filters" :key="filter" :filter="filter" :uploadImageUrl="uploadImageUrl">
                    <span>{{filter}}</span>
                </FilterBox>
            </div>
        </div>

        <!-- 글 작성 페이지 -->
        <div v-if="step == 2">
            <div class="upload-image" :class="uploadFilter" :style="{backgroundImage : `url(${uploadImageUrl})`}"></div>
            <div class="write">
                <textarea @input="editContent" class="write-box">Write!</textarea>
            </div>
        </div>
    </div>
</template>

<script>
import Post from "./Post"
import FilterBox from "./FilterBox";
import filters from "../assets/instaFilters";

export default {
    name: 'Container',
    props: {
        postData : Array,
        step : Number,
        uploadImageUrl : String,
        uploadFilter: String
    },
    data() {
        return {
            filters
        }
    },
    components : {
        Post,
        FilterBox
    },
    methods : {
        editContent(e) {
            var uploadContent = e.target.value;
            this.$emit("edit", uploadContent);
        }
    }
}
</script>

<style>
.upload-image{
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size : cover;
}
.filters{
    overflow-x:scroll;
    white-space: nowrap;
}
.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
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