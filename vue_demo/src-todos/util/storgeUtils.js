
const TODOS_KET = 'todos_key'
export default{

  saveTodos(todos){
      window.localStorage.setItem(TODOS_KET,JSON.stringify(todos))
  },

  readTodos(){
    return JSON.parse(window.localStorage.getItem(TODOS_KET) || '[]')
  }


}
