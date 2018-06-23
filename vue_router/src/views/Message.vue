<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push 查看</button>
        <button @click="replaceShow(message.id)">replace 查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "message",
      data(){
          return {
            messages: []
          }
      },

      mounted(){
          setTimeout(() => {
            const messages = [
              {
                id:1,
                title: 'message01'
              },
              {
                id:2,
                title: 'message02'
              },
              {
                id:3,
                title: 'message03'
              },
              {
                id:4,
                title: 'message04'
              },
            ]
            this.messages = messages
          },1000)
      },
      methods:{
        pushShow(id){
          this.$router.push(`/home/message/detail/${id}`)
        },
        replaceShow(id){
          this.$router.replace(`/home/message/detail/${id}`)
        }
      }
    }
</script>

<style scoped>

</style>
