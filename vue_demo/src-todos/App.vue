<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<todo-header @addTodo="addTodo"/>--><!--绑定事件-->
      <todo-header ref="header" /><!--绑定事件-->
      <to-list :todos="todos" />
      <todo-foot :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<script>
  import StorgeUtils from './util/storgeUtils'
  import PubSub from 'pubsub-js'
  import TodoHeader from './components/TodoHeader'
  import ToList from './components/ToList'
  import TodoFoot from './components/TodoFoot'

  export default {
    data(){
      return {
        // todos:[
        //   {title:'吃放',complete:false},
        //   {title:'睡觉',complete:true},
        //   {title:'coding',complete:false}
        // ]
        //从localstorge读取数据
        todos: StorgeUtils.readTodos()

      }
    },

    mounted(){
      //this.$on('addTodo',this.addTodo)
      this.$refs.header.$on('addTodo',this.addTodo),
      //订阅消息
      PubSub.subscribe('deleteTodo',(msg,index) => {
          this.deleteTodo(index)
      })
    },

    methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },

      deleteTodo(index){
        this.todos.splice(index,1)
      },

      deleteCompleteTodos(){
          this.todos=this.todos.filter(todo => !todo.complete)
      },

      selectAllTodos(check){
          this.todos.forEach(todo =>todo.complete=check)
      }
    },

    watch: {//监视
      todos:{
        deep: true, //监视深度
        // handler:function (value) {
        //   window.localStorage.setItem('todos_key',JSON.stringify(value))
        // }
        handler: StorgeUtils.saveTodos
      }
    },

    components: {
      TodoHeader, ToList,TodoFoot
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
