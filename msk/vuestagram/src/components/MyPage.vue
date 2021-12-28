<template>
    <div style="padding : 10px">
        <h4>팔로워</h4>
        <input @input="searchFollower" placeholder="?" />
        <div v-for="follower in followers" :key="follower" class="post-header">
            <div class="profile" :style="{backgroundImage: `url(${follower.image})`}"></div>
            <span class="profile-name">{{follower.name}}</span>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import followerData from '../assets/follower.json';

export default {
    name: 'MyPage',
    setup() {
        let followers = ref(followerData);

        function searchFollower(e) {
            var searchString = e.target.value;

            var filteredFollowers = followerData.filter(follower => follower.name.indexOf(searchString) >= 0);
            followers.value = filteredFollowers;
        }

        return { followers, searchFollower }
    }
}
</script>

<style>

</style>