<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addTodo="addTodo"/>
      <to-list :todos="todos" :deleteTodo="deleteTodo"/>
      <todo-foot :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<script>

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
        todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')

      }
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
        handler:function (value) {
          window.localStorage.setItem('todos_key',JSON.stringify(value))
        }
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
