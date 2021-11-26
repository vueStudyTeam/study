<template>
    <section>
        <transition-group name="list" tag="ul">
            <!-- :key는 있으면 효율적이고 빠르게 dom을 그릴수있다 -->
            <li v-for="(data, index) in propsdata" :key="data" class="shadow">
                <i class="checkBtn fa fa-check" aria-hidden="true"></i>
                {{data}}
                <!-- v-for을 (item,index)로 사용하여 index가 자동으로 매겨짐 -->
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>
    </section>
</template>

<script>
    export default {
        //상위에서 전달받음 변수명은 바꾸면 되는듯
        props: ['propsdata'],
        methods: {
            removeTodo(todoItem, index) {
                this.$emit('removeTodo', todoItem, index);
            }
        }

    }
</script>

<style>
    ul {
        list-style-type: none;
        padding-left: 0;
        margin-top: 0;
        text-align: left;
    }

    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }

    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }

    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }

    .list-item {
        display: inline-block;
        margin-right: 10px;
    }

    .list-move {
        transition: transform 1s;
    }

    .list-enter-active, .list-leave-active {
        transition : all 1s;
    }

    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

</style>