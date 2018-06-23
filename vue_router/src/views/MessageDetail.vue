<template>
  <div>
    <p>ID: {{$route.params.id}}</p>
    <ur>
      <li>{{messageDetail.id}}</li>
      <li>{{messageDetail.title}}</li>
      <li>{{messageDetail.content}}</li>
    </ur>
  </div>
</template>

<script>

    export default {
        name: "message-detail",
      data(){
          return {
            messageDetail: {}
          }
      },

      mounted(){
        setTimeout(() => {
          const allMessageDetails = [
            {
              id:1,
              title: 'message01',
              content: 'message01 content...'
            },
            {
              id:2,
              title: 'message02',
              content: 'message02 content...'
            },
            {
              id:3,
              title: 'message03',
              content: 'message03 content...'
            },
            {
              id:4,
              title: 'message04',
              content: 'message04 content...'
            },
          ]
          this.allMessageDetails = allMessageDetails
          const id = this.$route.params.id*1
          this.messageDetail = allMessageDetails.find(detail => detail.id===id)
        },1000)
      },

      watch: {
          $route: function (value) {
            const id = value.params.id*1
            this.messageDetail = this.allMessageDetails.find(detail => detail.id===id)
          }
      }
    }
</script>

<style scoped>

</style>
