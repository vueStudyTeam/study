import { createStore } from 'vuex'
import postData from './assets/postData'
import axios from 'axios'

const store = createStore({
    state () {
        return {
            posts: [...postData],
            moreIndex: 0
        }
    },
    mutations: {
        toggleLike(state, post) {
            post.liked = !post.liked;

            if (post.liked == true) {
                post.likes++;
            } else {
                post.likes--;
            }
        },
        setMorePost(state, morePost) {
            state.posts = [...state.posts, morePost];
            console.log("aa", state.posts);
            state.moreIndex++;
        }
    },
    actions: {
        viewMore(context) {
            var viewMoreUrl = `https://codingapple1.github.io/vue/more0.json`;
            axios.get(viewMoreUrl).then((result) => {
                var morePost = result.data;
                context.commit('setMorePost', morePost);
            });
        }
    }
})

export default store;