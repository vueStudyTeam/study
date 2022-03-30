import { createStore } from "vuex";
import data from './data/testData';

const store = createStore({
    state(){
        return {
            testData : data
        }
    },
    mutations : {
        sampleMutation(state){
            state.testData[0].data1 = 'change data value'
        }
    }
})

export default store;