<template>
    <div id="app">
        <TodoHeader></TodoHeader>
        <!--  addTodo(toDoItem) -> $emit(함수,파라미터1,파라미터2,...) 
        addTodo의 파라미터에 TodoInput.vue addTodo메서드의 value값이 입력됨 -->
        <TodoInput v-on:addTodo="addTodo"></TodoInput>
        <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
        <!-- $emit으로 전달할 이벤트 이름 -> removeAll 로 지칭 해당 이벤트의 메소드(clearAll)로 매칭-->
        <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
    </div>
</template>

<script>
    import TodoHeader from './components/TodoHeader.vue'
    import TodoFooter from './components/TodoFooter.vue'
    import TodoList from './components/TodoList.vue'
    import TodoInput from './components/TodoInput.vue'

    export default {
        data(){
            return {
                todoItems:[]
            }
        },
        created() {
            //앱 실행시 localstorage 확인 후 저장 값이 있을경우 화면에 뿌리고 todoitems에 넣는다.
            if (localStorage.length > 0) {
                for (var i = 0; i < localStorage.length; i++) {
                    this
                        .todoItems
                        .push(localStorage.key(i));
                }
            }
        },
        methods: {
            addTodo(todoItem){
                localStorage.setItem(todoItem, todoItem);
                this.todoItems.push(todoItem);
            },
            clearAll(){
                localStorage.clear();
                this.todoItems = [];
            },
            removeTodo(todoItem, index){
                localStorage.removeItem(todoItem);
                this.todoItems.splice(index, 1);
            }
        },
        components: {
            'TodoHeader': TodoHeader,
            'TodoInput': TodoInput,
            'TodoList': TodoList,
            'TodoFooter': TodoFooter
        }
    }
</script>

<style>
    input {
        border-style: groove;
        width: 200px;
    }

    button{
      border-style: groove;
    }

    .shadow{
      box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
    }
</style>