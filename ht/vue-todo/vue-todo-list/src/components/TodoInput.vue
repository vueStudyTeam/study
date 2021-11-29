<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fa fa-plus" aria-hidden="true"></i>
        </span>

        <Modal v-if="showModal" @close="showModal=false">
            <h3 slot="header">경고></h3>
            <span slot="footer" @click="showModal = false">
                할 일을 입력하세요.
                <i class="closemodalBtn fa fa-times" aria-hidden="true"></i>
            </span>
        </Modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue';
export default {
  components: { Modal:Modal },
   data(){
       return{
           newTodoItem: '',
           showModal: false
       }
   },
   methods: {
       addTodo(){
           if(this.newTodoItem !== ""){
               var value = this.newTodoItem && this.newTodoItem.trim();
               this.$emit('addTodo',value);
               this.clearInput();
           }else{
               this.showModal = !this.showModal;
           }
           localStorage.setItem(this.newTodoItem, this.newTodoItem);
       },
       clearInput(){
           this.newTodoItem = '';
       }
   }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }

    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }

    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: inline-block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }

    .addBtn {
        color: white;
        vertical-align: middle;
    }

    .page {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
    }

    /* add default color for animation start  */

    /* toggle this class */

    .color-bg-start {
        background-color: salmon;
    }

    /* toggle class bg-animate-color */

    .bg-animate-color {
        animation: random-bg 0.5s linear infinite;
    }

    /* add animation to bg color  */

    @keyframes random-bg {
        from {
            filter: hue-rotate(0);
        }
        to {
            filter: hue-rotate(360deg);
        }
    }

    .fun-btn {
        /* change bg color to get different hues    */
        background-color: salmon;
        color: white;
        padding: 2em 3em;
        border: none;
        transition: all 0.3s ease;
        border-radius: 5px;
        letter-spacing: 2px;
        text-transform: uppercase;
        outline: none;
        align-self: center;
        cursor: pointer;
        font-weight: bold;
    }

    .fun-btn:hover {
        animation: random-bg 0.5s linear infinite, grow 1300ms ease infinite;
    }

    .start-fun {
        background-color: #fff !important;
        /* change color of button text when fun is started   */
        color: salmon !important;
    }

    /* pulsating effect on button */
    @keyframes grow {
        0% {
            transform: scale(1);
        }
        14% {
            transform: scale(1.3);
        }
        28% {
            transform: scale(1);
        }
        42% {
            transform: scale(1.3);
        }
        70% {
            transform: scale(1);
        }
    }
</style>
