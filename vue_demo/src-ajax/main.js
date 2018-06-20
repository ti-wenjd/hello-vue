import Vue from 'vue'
import VueResource from  'vue-resource'
import App from './App'

Vue.use(VueResource) //声明式使用插件  内部会给vm对象和组件对象添加一个属性 $http

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
