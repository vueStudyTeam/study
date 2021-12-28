import axios from 'axios'
import { createStore } from 'vuex'
import postingData from './data/PostingData'
const store = createStore({
  state(){
    return {
      postingData : postingData,
      more : {},
    }
  },
  mounted() {
      
  },
  mutations : {
      setMore(state,data){
        state.more = data;
      },
      changeName(state){
          state.testData = 'changed data'
      },
      changeLikes(state,index){
          if(!state.postingData[index].liked){
            state.postingData[index].likes++;
            state.postingData[index].liked = true;
          }else{
            state.postingData[index].likes--;
            state.postingData[index].liked = false;
          }
      }
  },
  //서버 요청 하는곳 
  actions : {
    getMoreData(context){
        axios.get('https://codingapple1.github.io/vue/more0.json').then((result)=>{
            context.commit('setMore',result.data);
        })
    }
  }
})

export default store