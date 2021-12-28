import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
      name: 'kim',
      age : 20,
      likes : 30,
      more : {},
    }
  },
  mutations:{
      setMore(state, data){
          state.more = data;
      },
      이름변경(state){
        state.name = 'park';
      },
      plusAge(state,data){
          state.age+=data;
      },
      plusLikes(state){
        state.age++;
      },
      minusLikes(state){
        state.age--;
      },

  },
  actions :{
    //시간이 걸리는 함수
    getData(context){
        axios.get('https://codingapple1.github.io/vue/more0.json')
        .then(res => {
            context.commit('setMore',res.data);
        })
        .catch(err => {
            console.error(err); 
        });
    },
  }
})

export default store;